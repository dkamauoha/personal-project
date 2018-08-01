const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
require('dotenv').config();

//Controllers


const app = express();
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env;
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            full_name: '',
            email: '',
            profile_pic: '',
            auth_id: ''
        }
    }
    next()
})

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

//ENDPOINTS
//Auth0
app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);
    const db = req.app.get('db');
    let { sub, email, name, picture } = resWithUserData.data;
    let foundUser = await db.find_user([sub]);
    if (foundUser[0]) {
        req.session.user = foundUser[0];
        res.redirect('/#/')
    } else {
        let createdUser = await db.create_user([name, email, picture, sub]);
        req.session.user = createdUser[0];
        res.redirect('/#/')
    }
})

app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`));
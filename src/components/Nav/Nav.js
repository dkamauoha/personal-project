import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav () {
    let login = () => {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${window.location.origin}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    };


    return (
        <div>
            <div>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/services'><button>SERVICES</button></Link>
                <Link to='/gallery'><button>GALLERY</button></Link>
                <Link to='/about'><button>ABOUT</button></Link>
                <Link to='/schedule'><button>SCHEDULE AN APPOINTMENT</button></Link>
                <Link to='/appointments'><button>APPOINTMENTS</button></Link>
            </div>
            <div>
                <Link to='/'><button onClick={login}>Login</button></Link>
            </div>
        </div>
    )
    
}

export default Nav;
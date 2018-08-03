import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateUser } from '../../ducks/reducer';

import './Nav.css';
import ToggleButton from './ToggleButton/ToggleButton';


class Nav extends Component {
    constructor() {
        super();
        this.state= {
            user: {},
            navExtended: false
        }
        this.changeNavType = this.changeNavType.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/user').then(res => {
            console.log('res.data', res.data);
            this.setState({user: res.data});
        })
    }
    
    login () {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${window.location.origin}/auth/callback`;
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    };

    changeNavType () {
        this.setState((prevState) => {
            return {navExtended: !prevState.navExtended};
        })
    }
    
    render(){
        console.log('dropClass', this.state.navExtended);
        let navDisplay = 'navbar';
        let linkDisplay = 'links';
        if (!this.state.navExtended) {
            navDisplay = 'navbar';
            linkDisplay = 'links';
        } else {
            navDisplay = 'navbar-drop'
            linkDisplay = 'links-drop'
        }
        return (
            <header className={navDisplay}>
                <div className='toggle-button'>
                    <ToggleButton switch={this.changeNavType}/>
                </div>
                <div className='logo'>
                    <Link to='/' className='logo-text'><h2 className='actual-text'>Amber</h2></Link>
                </div>
                <div className={linkDisplay}>
                    
                    <Link to='/services'><button>SERVICES</button></Link>
                    <Link to='/gallery'><button>GALLERY</button></Link>
                    <Link to='/about'><button>ABOUT</button></Link>
                    <Link to='/schedule'><button>BOOK</button></Link>
                    <Link to='/appointments'><button>APPOINTMENTS</button></Link>
                </div>
                <div className='login'>
                    <Link to='/'><button onClick={() => this.login()}>Login</button></Link>
                    <img src={this.state.user.profile_pic} alt=''
                        className='iStyle'/>
                </div>
            </header>

        )
    } 
}


export default connect()(Nav);
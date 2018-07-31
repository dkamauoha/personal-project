import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div>
            <h2>Nav</h2>
            <div>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/services'><button>SERVICES</button></Link>
                <Link to='/gallery'><button>GALLERY</button></Link>
                <Link to='/about'><button>ABOUT</button></Link>
                <Link to='/schedule'><button>SCHEDULE AN APPOINTMENT</button></Link>
                <Link to='/appointments'><button>APPOINTMENTS</button></Link>
            </div>
        </div>
    )
}

export default Nav;
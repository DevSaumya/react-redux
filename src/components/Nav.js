import '../assets/nav.css';
import {Link} from 'react-router-dom';
import React from 'react';

function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav className= "nav-container">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about" style={navStyle}> 
                    <li>About</li>
                </Link>
                <Link to="/shop" style={navStyle}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export default function Nav() {
    return(
        <div>
            <ul className='navbar'>
                <Link to='/'><li>About</li></Link>
                <Link to='/portfolio'><li>Portfolio</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    );
}
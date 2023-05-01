import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer fixed-bottom d-flex justify-content-around p-4 bg-dark'>
            {/* these will have icons as links */}
            <a href='/'>GitHub</a>
            <a href='/'>LinkedIn</a>
            <a href='/'>Home</a>
        </div>
    )
}

export default Footer;
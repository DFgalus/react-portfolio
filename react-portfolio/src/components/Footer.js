import React from 'react';


function Footer() {
    return (
        <div className='footer fixed-bottom d-flex justify-content-around p-4'>
            {/* these will have icons as links */}
            <a href='/'>GitHub</a>
            <a href='/'>LinkedIn</a>
            <a href='/'>Home</a>
        </div>
    )
}

export default Footer;
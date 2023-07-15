import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className='footer fixed-bottom d-flex justify-content-around p-4'>
            {/* these will have icons as links */}
            <a href='https://github.com/DFgalus'>
                <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>
            <a href='https://www.linkedin.com/in/damian-galus-266ba3254/'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>
            <a href='/'>
                <FontAwesomeIcon icon={faHouse} size='xl' />
            </a>
        </div>
    )
}

export default Footer;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'


export default function Footer() {
    return (
        <div className='footer-container'>
            <a href='https://github.com/danseiders' target='_blank' className='footer-link'>
                <FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon>
            </a>
            <a href='https://www.linkedin.com/in/dan-seiders/' target='_blank' className='footer-link'>
                <FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon>
            </a>
            <a href='https://www.instagram.com/danseiders3/' target='_blank' className='footer-link'>
                <FontAwesomeIcon icon={faInstagram} className='icon'></FontAwesomeIcon>
            </a>
            <a href='https://www.facebook.com/dan.seiders' target='_blank' className='footer-link'>
                <FontAwesomeIcon icon={faFacebook} className='icon'></FontAwesomeIcon>
            </a>
            <p>© 2020 Dan Seiders</p>
        </div>
    )
}

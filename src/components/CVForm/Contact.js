import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className='Contact'>
            <h3>Contact</h3>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <input type="text" placeholder='Phone'></input>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <input type="text" placeholder='E-mail'></input>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <input type="text" placeholder='Address'></input>
        </div>
    )
}

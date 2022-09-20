import React from 'react';
import { useState } from 'react';
import { Contact } from '../CVPreview/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function ContactF() {
    const initialValues = {
        phone: "",
        email: "",
        address: ""
    };
    const [data, setData] = useState(initialValues);

    const handleChange = (e) => {
        console.log(data);  
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className='Contact'>
            <h3>Contact</h3>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <input
                onChange={handleChange}
                type="text" 
                placeholder='Phone'
                name="phone"
                value={data.phone}>

            </input>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder='E-mail'
                name="email"
                value={data.email}
            >

            </input>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder='Address'
                name="address"
                value={data.address}>
            
            </input>
            <Contact phone={data.phone} email={data.email} address={data.address}/>
        </div>
    )
}

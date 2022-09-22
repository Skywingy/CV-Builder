import React from 'react';
import { useState } from 'react';
import { Contact } from '../CVPreview/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


export  function ContactF() {
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
    <Contacstyle>
        <div className='Contact'>  
            <h3>Contact</h3>
            <FormS>
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
            </FormS>
            </div>
            <Preview className='Preview'>
                <Contact handleChange={handleChange} data={data}  phone={data.phone} email={data.email} address={data.address} />
            </Preview>
        
    </Contacstyle>
    )
}

const Contacstyle = styled.div`
background-color: #019875;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
gap: 2em 0px;
`;

const Preview = styled.div`
background-color: #BFD834;
border: 1px solid black;
padding-bottom: 20px;
border-top: none;
border-bottom: none;
`;

const FormS = styled.div`
display: grid;
grid-auto-columns: 1fr; 
grid-template-columns: 1fr 16fr; 
grid-template-rows: 1fr 1fr 1fr; 
gap: 1.5em 0px; 
width: 80%;
padding-left: 10%;

`;
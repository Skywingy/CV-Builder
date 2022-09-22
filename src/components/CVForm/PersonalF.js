import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Personal } from '../CVPreview/Personal';
import styled from 'styled-components'


export  function PersonalF() {
    //useState initial state storage
    const initialValues = {
        fname: "",
        lname: "",
        title: "",
        prof: ""
    };
     //useRef
    const fileInputRef = useRef();

     //useState
    const [data, setData] = useState(initialValues);    
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    //useEffect
    useEffect(()=> {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    //functions
    const handleChange = (e) => {
        console.log(data);  
        setData({ ...data, [e.target.name]: e.target.value });
    };

    
    return (
        <Contacstyle className='style'>
        
        <form className='Summary'>
        <FormS className='styleF'>
            <h3>Personal Information</h3>
            <input 
                onChange={handleChange}
                type='text' 
                placeholder='First Name'
                name="fname"
                value={data.fname}>
            </input>
            
            <input 
            onChange={handleChange} 
            type='text'
            placeholder='Last Name'
            name="lname"
            value={data.lname}>
            </input>

            <input
            onChange={handleChange} 
            type='text' 
            placeholder='Title'
            name="title"
            value={data.title}>
            </input>

            <textarea
            onChange={handleChange} 
            placeholder='Profile Info'
            name="pnfo"
            value={data.pnfo}>
            </textarea>

            <label></label>
            <input 
            type='file'
            name='file'
            style={{ display: "none"}}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
                const file = event.target.files[0];
                if(file && file.type.substring(0,5) === "image") {
                    setImage(file);
                } else {
                    setImage(null);
                }
            }}
            />
                <div>
                    
                    <button onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                        console.log("here",{preview});
                    }}>Add Image</button>
                </div>
                </FormS>
            </form>
        
                <Preview className='Preview'>
                    <Personal firstName={data.fname} lastName={data.lname} title={data.title} prof={data.pnfo} pic={preview}/>
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
border-bottom: none;
display: flex;
justify-content: center;
`;

const FormS = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding-left: 10%;
gap: 9px; 
`;

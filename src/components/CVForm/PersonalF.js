import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Personal } from '../CVPreview/Personal';


export  function PersonalF() {
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
        <form className='Summary'>
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

            <input
            onChange={handleChange} 
            type='text' 
            placeholder='Profile Info'
            name="pnfo"
            value={data.pnfo}>
            </input>

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
            
            <Personal firstName={data.fname} lastName={data.lname} title={data.title} prof={data.pnfo} pic={preview}/>
        </form>
        )
    
}

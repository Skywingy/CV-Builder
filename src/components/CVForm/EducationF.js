import React, { useState, useEffect } from 'react'
import Education from '../CVPreview/Education';
import uniqid from "uniqid";
import styled from 'styled-components';

export  function EducationF() {

    const initialValues = {
        instit: '',
        city: '',
        degree: '',
        subject: '',
        prof: '',
        from: '',
        to: '',
        id: uniqid(),
    };

    const Local_list_key = "list.Storage";

    const [list, setList] = useState([]);
    const [infos, setInfos] = useState(initialValues);

    
    const handleDelete = (id) => {
        console.log(infos.id);
        const newList = [...list];
        const index = list.findIndex((infos)=> infos.id === id);
        newList.splice(index, 1);
        setList(newList);

    };


    const updateInput = (e) => {
        console.log(infos);
        const {name, value } = e.target;
        setInfos({...infos, [name]: value});
    };

    const addItem = (event) => {
        event.preventDefault();
        setInfos(initialValues);
    
        setList(list.concat(infos));
        setInfos(initialValues);

        console.log("list",list);

    };
    useEffect(() => {
        localStorage.setItem(Local_list_key, JSON.stringify(list))
    }, [list]);

    return (
    <Contacstyle className='Edu'>
        <Form>
    <form className='Education' onSubmit={addItem}>
        <FormS>
        <h3>Education</h3>
        <input 
        type='text' 
        placeholder='Institution Name'
        name='instit'
        value={infos.instit}
        onChange={updateInput}
        id="taskInput"
        >

        </input>
        <input 
        type='text' 
        placeholder='City'
        name='city'
        value={infos.city}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <input 
        type='text' 
        placeholder='Degree'
        name='degree'
        value={infos.degree}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <input 
        type='text' 
        placeholder='Subject'
        name='subject'
        value={infos.subject}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <input 
        type='text' 
        placeholder='Profile Info'
        name='prof'
        value={infos.prof}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <input 
        type='text' 
        placeholder='From'
        name='from'
        value={infos.from}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <input 
        type='text' 
        placeholder='To'
        name='to'
        value={infos.to}
        onChange={updateInput}
        id="taskInput"
        >
        </input>
        <button type='submit'>Add</button>
        </FormS>
        </form>
        </Form>
        <Preview className='Preview'>
            <Education parentToChild={list} childtoParent={handleDelete}/>
        </Preview>
    </Contacstyle>
    )
}

const Preview = styled.div`
background-color: #BFD834;
border: 1px solid black;
padding-bottom: 20px;
border-top: none;
`;
const Contacstyle = styled.div`
background-color: #019875;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
gap: 2em 0px; 
margin-bottom: 20px;
`;

const Form = styled.div`
background-color: #019875;
padding-bottom: 40px;
`;

const FormS = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding-left: 10%;
gap: 9px; 
`;

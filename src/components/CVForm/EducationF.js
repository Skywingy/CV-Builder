import React, { useState, useEffect } from 'react'
import Education from '../CVPreview/Education'
import uniqid from "uniqid";

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
    <form className='Education' onSubmit={addItem}>
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
        <Education parentToChild={list} childtoParent={handleDelete}/>
    </form>
    )
}

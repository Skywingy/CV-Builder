import React, { useState, useEffect } from "react";
import Experience from "../CVPreview/Experience";
import uniqid from "uniqid";

export function ExperienceF () {
    
    const initialValues = {
        company: '',
        position: '',
        from: '',
        to: '',
        description: '',
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
    
        /* setList(prevList => {
            return [...prevList, {infos : infos
            }]        
        }); */

        setList(list.concat(infos));
        setInfos(initialValues);
        

        
        console.log("list",list);

    };

    useEffect(() => {
        localStorage.setItem(Local_list_key, JSON.stringify(list))
    }, [list]);

    return (
        <form onSubmit={addItem} id="clearForm">
            <h3>Experience</h3>
            <label htmlFor="taskInput"></label>
            <input 
            type="text" 
            placeholder='Company'
            name='company'
            value={infos.company}
            onChange={updateInput}
            id="taskInput"
            >
            </input>

            <input
            type="text" 
            placeholder='Position'
            name='position'
            value={infos.position}
            onChange={updateInput}
        >                
            </input>

            <input 
            type="text" 
            placeholder='From'  
            name='from'
            value={infos.from}
            onChange={updateInput}   
            >
            </input>

            <input 
            type="text" 
            placeholder='To'
            name='to'
            value={infos.to}
            onChange={updateInput}
            >
            </input>

            <input 
            type="text" 
            placeholder='Description'
            name='description'
            value={infos.description}
            onChange={updateInput}      
            >
            </input>
            <button type="submit" >Add</button>
            <Experience parentToChild={list} childtoParent={handleDelete}/>
        
        </form>
    );
}
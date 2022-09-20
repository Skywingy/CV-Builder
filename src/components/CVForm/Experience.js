import React from 'react'

export default function Experience() {
    return (
        <div className='Experience'>
            <h3>Experience</h3>
            <input type="text" placeholder='Company'></input>
            <input type="text" placeholder='Position'></input>
            <input type="text" placeholder='From'></input>
            <input type="text" placeholder='To'></input>
            <input type="text" placeholder='Description'></input>
            <button>Delete</button>
            <button>Add</button>
        </div>
    )
}

import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

const Main = () => {
    return (
        <div className='body'>
            <h2>Main Content here</h2> 
            <CVForm/>
            <CVPreview/>
        </div>
)
}

export default Main
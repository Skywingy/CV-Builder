import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import styled from 'styled-components';

const Main = () => {
    return (
        <Container>
            <div className='body'>
                <h2>Main Content here</h2> 
                <CVForm/>
                <CVPreview/>
            </div>
        </Container>
)
}

export default Main

const Container = styled.div`


`;
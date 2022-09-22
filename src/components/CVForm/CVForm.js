import React from 'react';
import { PersonalF } from './PersonalF';
import { ContactF } from './ContactF';
import { ExperienceF } from './ExperienceF';
import { EducationF } from './EducationF';
import styled from 'styled-components';

export default function CVForm() {
    return (
    <FormStyle className='Style'>
        <div class="CVForm">
            <PersonalF/>
            <ContactF/>
            <ExperienceF/>
            <EducationF/>
        </div>
    </FormStyle> 
    )
}

const FormStyle = styled.div`
background-color: snow;
display: grid;
grid-template-columns: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
padding: 10px;
padding-bottom: 20px;
border: 1px solid black;
`;
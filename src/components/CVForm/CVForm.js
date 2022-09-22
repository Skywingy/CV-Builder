import React from 'react';
import { PersonalF } from './PersonalF';
import { ContactF } from './ContactF';
import { ExperienceF } from './ExperienceF';
import { EducationF } from './EducationF';
import styled from 'styled-components';

export default function CVForm() {
    return (
    <formStyle>
        <div>
            <PersonalF/>
            <ContactF/>
            <ExperienceF/>
            <EducationF/>
        </div>
    </formStyle> 
    )
}

const formStyle = styled.div`
background-color: snow;
`;
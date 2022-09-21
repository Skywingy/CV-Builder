import React from 'react';
import { PersonalF } from './PersonalF';
import ContactF from './Contact';
import { ExperienceF } from './ExperienceF';
import Education from './Education';

export default function CVForm() {
    return (
        <div>
            <PersonalF/>
            <ContactF/>
            <ExperienceF/>
            <Education/>
        </div>
    )
}

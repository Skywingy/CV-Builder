import React from 'react';
import { PersonalF } from './PersonalF';
import ContactF from './Contact';
import Experience from './Experience';
import Education from './Education';

export default function CVForm() {
    return (
        <div>
            <PersonalF/>
            <ContactF/>
            <Experience/>
            <Education/>
        </div>
    )
}

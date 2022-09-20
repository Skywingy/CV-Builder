import React from 'react';
import { PersonalF } from './PersonalF';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';

export default function CVForm() {
    return (
        <div>
            <PersonalF/>
            <Contact/>
            <Experience/>
            <Education/>
        </div>
    )
}

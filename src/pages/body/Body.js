import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './Contact';

export default function Body() {
    return (
        <div className="body">
            <Landing />
            <About />
            <Skill />
            <Contact />
        </div>
    )
}

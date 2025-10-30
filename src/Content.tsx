import React from 'react'
import About from './content/About';
import Services from './content/Services';
import Contact from './Contact';
import Datuielade from './Datuielade';
import './saturs.css';

export default function Content() {
  return (
    <div className='content'>
        {/* Par mums */}
        <About />
        <Services />

        <Datuielade />

        {/* Pakalpojumi */}
         < Contact /> 
    </div>
  )
}

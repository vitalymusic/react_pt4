import React from 'react'
import About from './content/About';
import Services from './content/Services';
import './saturs.css';

export default function Content() {
  return (
    <div className='content'>
        {/* Par mums */}
        <About />
        <Services />
        {/* Pakalpojumi */}

    </div>
  )
}

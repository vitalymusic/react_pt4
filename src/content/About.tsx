import React from 'react'
import Apraksts from './Apraksts';
import "./about.css";

export default function About() {
  return (
    <div>
        <h2>Par mums</h2>
        <div className="description">
            <Apraksts />
            <Apraksts />
            <Apraksts />
        </div>
       
    </div>
  )
}

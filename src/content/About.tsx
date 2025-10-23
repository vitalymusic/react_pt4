import React from 'react'
import Apraksts from './Apraksts';
import "./about.css";

export default function About() {
    const dati = [
        {virsraksts:"Mājaslpau veidošana",attels:"attels.jpg",apraksts:"Veidojam mājaslapas ar React"},
        {virsraksts:"Datoru labošana",attels:"attels2.jpg",apraksts:"Veidojam mājaslapas ar React"},
        {virsraksts:"Kursu vadīšana",attels:"attels.jpg",apraksts:"Veidojam mājaslapas ar React"}
    ];
    
  return (
    <div>
        <h2>Par mums</h2>
        <div className="description">
            
            {
            dati.map((elem,i)=>{
                return <Apraksts dati={elem} key={i}/>
            })
            }
            
        </div>
       
    </div>
  )
}

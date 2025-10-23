import React from 'react'
import './dialog.css';

export default function Dialog(props:any) {
  return (
    props.show==true ?
    (
     <div className="dialog">
        <div>
             <button onClick={props.hideFunction}>x</button>
        </div>
       
        <h1>Dialogs</h1>
     </div>
    ):(
        null
    )
  )
}

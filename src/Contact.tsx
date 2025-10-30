import React from 'react';
import {useState} from 'react';

export default function Contact() {
    
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');



    return (


        <>
            <h1>Kontaktu forma</h1>
            <form>
                <div>
                    <span className="text-sm font-medium">E-pasts</span>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <span className="text-sm font-medium">Tēma</span>
                    <input
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                    />
                </div>
                <div>
                    <span className="text-sm font-medium">Ziņojums</span>
                    <textarea
                        name="message"
                        value={message}
                         onChange={(e)=>{setMessage(e.target.value)}}
                    />
                </div>
                <div>
                    <input 
                        type='submit'
                        value="Nosūtīt"
                    />
                </div>
            </form>
        </>

    )
}

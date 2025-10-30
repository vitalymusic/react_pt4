import React from 'react';
import {useState} from 'react';

export default function Contact() {
    
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    function checkForm(){
           if(email.length > 3 && subject.length > 3 && message.length>5){
                return true
           }  else{
                alert("Aizpildiet formu");
            return false
           }   
    }     


    function submitForm(e :any){
        e.preventDefault();

        if(!checkForm()){ return false}

        console.log(e);

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                email:{email},
                subject:{subject},
                message:{message}
            })
        }).then(()=>{
            setEmail("");
            setSubject("");
            setMessage("");
            alert("Dati veiksmīgi nosūtīti")
        }).catch((error)=>{
                 alert("ir kļūda nosūtot datus: "+ error);
        })

    }
    return (
        <>
            <h1>Kontaktu forma</h1>
            <form onSubmit = {submitForm}>
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

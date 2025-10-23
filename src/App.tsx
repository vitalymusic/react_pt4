import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Dialog from './content/Dialog';

// UseState;
import {useState,useEffect} from 'react';




export function App() {

  let data; 
  data = "test";
  // Galvenais komponents

  const [show,setShow] = useState(false);
  const [cookie,setCookie] = useState(false);



  function closeDialog(){
    setShow(false);
  }


  function acceptCookies(){
      localStorage.setItem("cookies-accepted","true");
      setCookie(true);
  }


  function checkCookies(){
    if(localStorage.getItem("cookies-accepted")=="true"){
      setCookie(true);
    }
  }

  useEffect(()=>{
    checkCookies();
  },[cookie]);

  return (
    <>
      <Header />
      <button onClick={()=>{
        setShow(!show);
      }}>Parādīt dialogu</button>

      <Content />
          <Dialog  show={show}  hideFunction={closeDialog}/>
      <Footer />


      {cookie==false?
        (
          <div className='cookieMessage'>
            Cookies <button onClick={()=>{acceptCookies()}}>Piekrītu</button>
          </div>
        ):
        (null)
      
      }
    </>
  );
}

import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Dialog from './content/Dialog';

// UseState;
import {useState} from 'react';




export function App() {

  let data; 
  data = "test";
  // Galvenais komponents

  const [show,setShow] = useState(false);

  function closeDialog(){
    setShow(false);
  }


  return (
    <>
      <Header />
      <button onClick={()=>{
        setShow(!show);
      }}>Parādīt dialogu</button>

      <Content />
      

          <Dialog  show={show}  hideFunction={closeDialog}/>
      <Footer />

    </>
  );
}

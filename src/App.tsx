
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Dialog from './content/Dialog';
import Login from './Login';
import Users from './Users';
import Product from './Product';



// UseState;
import {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';



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
    <BrowserRouter>
    <>
      <Header />
      <nav style={{
          display:"flex",
          justifyContent:"center",
          gap:"10px"
      }}>
          <Link to="/">Galvenā</Link>
          <Link to="/users">Lietotāji</Link>
          <Link to="/login">Ielogoties</Link>
      </nav>
      <button onClick={()=>{
        setShow(!show);
      }}>Parādīt dialogu</button>

      <Routes>
          <Route path="/" element={ <Content />}/>
          <Route path="/users" element={ <Users />}/>
          <Route path="/login" element={ <Login />}/>
          <Route path="/product/:id" element={ <Product />}/>

      </Routes>

     

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
    </BrowserRouter>
  );
   
}

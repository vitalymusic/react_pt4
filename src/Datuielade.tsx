import React from 'react'
import {useState,useEffect} from 'react';

export default function Datuielade() {
  const [data,setData] = useState([]);
  


  function loadData(){
     fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setData(data.products))
    // .finally(()=>(console.log(data)))
  }


  return (
    <>
      <h3>Datuielade</h3>

    <button onClick={loadData}>Ielādēt datus</button>

    <div className='dati' style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      justifyContent:"center",
      overflow:"hidden"
    }}>
        {data.length==0?
          <>
          Ielāde....
          </>:
          <>
            {data.map((item:any,i:number)=>{
                return (
                  <div className='item' key={i} style={{
                      width:"300px"
                  }}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <img src={item.thumbnail} alt="" />
                      <h5 style={{textAlign:"center"}}>{item.price} &euro;</h5>
                  </div>
                )
            })}
          </>
        }
    </div>  
    </>
    



  )
}

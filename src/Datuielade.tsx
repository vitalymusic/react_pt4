import React from 'react'
import {useState,useEffect} from 'react';
import {Link} from 'react-router';

export default function Datuielade() {
  const [data,setData] = useState([]);


  


  function loadData(){
     fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setData(data.products))
    // .finally(()=>(console.log(data)))
  }


  useEffect(()=>{
    loadData();
  },[])

  return (
    <>
      <h3>Datuielade</h3>
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
                      <Link to={`/product/${item.id}`}>Skatīt produktu</Link>
                  </div>
                )
            })}
          </>
        }
    </div>  
    </>
    



  )
}

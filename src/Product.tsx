import React from 'react'
import {useParams} from 'react-router';
import {Link} from 'react-router';
import {useState,useEffect} from 'react';

export default function Product() {
  const { id } = useParams();


  const [productData,setproductData] = useState("");

  function loadproductData(productId :any){
         fetch('https://dummyjson.com/products/'+productId)
    .then(res => res.json())
    .then(data => setproductData(data))
    .finally(()=>{console.log(productData)})

  }

  useEffect(()=>{
    loadproductData(id)
  },[])
  if(productData){
  return (
    <div className='prodctCard'>
      <Link to="/" className='button'>Atgrizties uz sarakstu</Link>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
      <div className='images'>
        <img src={productData.images[0]} />

      </div>




    </div>
  )
}
}

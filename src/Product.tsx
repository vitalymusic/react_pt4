import React from 'react'
import {useParams} from 'react-router';
import {Link} from 'react-router';
import {useState,useEffect} from 'react';

export default function Product() {
  const { id } = useParams();


  const [productData,setproductData] = useState(null);

  function loadproductData(productId :any){
         fetch('https://dummyjson.com/products/'+productId)
    .then(res => res.json())
    .then(data => setproductData(productData))
    .finally(()=>{console.log(productData)})

  }

  useEffect(()=>{
    loadproductData(id)
  },[])

  return (
    <>
      <Link to="/">Atgrizties uz sarakstu</Link>
      <h1>Produkta kartiņa nr: {id}</h1>



    </>
  )
}

import React, { useState  } from 'react'
import { useEffect } from "react"

const Products = () => {
    const [product ,setProduct]=useState([]);

async function getProducts(){

    try{
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProduct(data.products);
    //   console.log(data.products);
    
    }catch(error){
      console.log(error)

    }
    
  }

  useEffect(()=>{
    getProducts();
  } ,[]);
 


  return (
    <>
    <div>Products</div>
    {product.map((product)=>{
        return <div key={product.id}>
            <h6>{product.id} </h6>
            <img height={200} src={product.images} alt="" />
            
            </div>
        
        ;
    })

    }
    </>
  )
}

export default Products
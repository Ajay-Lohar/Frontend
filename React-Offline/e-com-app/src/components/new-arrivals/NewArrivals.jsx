import React, { useState } from 'react'
import './NewArrivals.css'

const NewArrivals = () => {

    const [products,setProduct]= useState([]);

    
  return (
   
    <section class="cards-container">
        <div class="card-heading">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div class="card-item flex center wrap">
           
        </div>
        
        <div class="view-all-btn flex center">
            <button class="show-all">View All</button>
        </div>
    </section>
  )
}

export default NewArrivals
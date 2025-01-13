import React, { useState ,useEffect} from 'react'
import './NewArrivals.css'

const NewArrivals = () => {

    const [products,getProducts]= useState([]);

    
    async function getProducts() {
      
  
        const res = await fetch("https://dummyjson.com/products?limit=8");
        const data = await res.json();
        setProducts(data.products); 
        
     
    }

    useEffect(() => {
      getProducts();
    }, []);

  return (
   
    <section className="cards-container">
        <div className="card-heading">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div className="card-item flex center wrap">
          {products.map((products)=>{
            return(
             <Link  to= {`ProductPage/${ProductId}`} >
              <div className="card">
                <div className="item-img">
                  <img src={products.thumbnail} />
                  </div>
                  <div className="item-text">
                    <p>{products.title}</p>
                    <p>
                      <div className="rating">
                       </div> 
                       </p><div className="pricing">
                        <p>{products.price}</p>
                      </div>
                    </div>
              </div>
             </ Link>
          )})

          }
          
        </div>
        
        <div className="view-all-btn flex center">
            <button className="show-all">View All</button>
        </div>
    </section>
  )
}

export default NewArrivals
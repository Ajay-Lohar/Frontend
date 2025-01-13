import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const { productId }= useParams();

    const [product, setProduct] = useState(null);    

           async function getProductsId() {
          
      
            const res = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await res.json();
            setProduct(product); 

            console.log(product);
            
         
        }
    
        useEffect(() => {
            getProductsId();
        }, []);
  return (

    <>
    <Link to={`ProductPage/${productId}`}>ProductPage {Products.title}</Link>
   
    </>
  )
}

export default ProductPage
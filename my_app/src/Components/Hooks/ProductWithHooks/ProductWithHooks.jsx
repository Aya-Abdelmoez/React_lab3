import React ,{useState } from 'react';

import  {Products, products}  from './ProductData';
import './style.css'
import Counter from './Counter/Counter';
function ProductWithHooks() {

   const [ProductData , setProducts] = useState(products);
   //[{img : "" , name : "" , price : "" , description : "" , category : ""}]   
  return (
        <div>
          {ProductData.map((Product) => (
            <div key = {Product.id} className='product-card'>
            <img src ={Product.img} alt = "problem" />
            <h2>{Product.name}</h2>
            <p>{Product.price}</p>
            <p>{Product.description}</p>
            <p>{Product.category}</p>
            <Counter />


            </div>
          )
          
          )  
}
          

          
          
        </div>
  );
}

export default ProductWithHooks;
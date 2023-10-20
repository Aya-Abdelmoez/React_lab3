import React, { Component } from 'react'


import {products} from './ProductData'

import './style.css'

class Products extends Component {
  render() {
    return (
        <div>
        { products.map((product) =>(

          <div key={product.id} className='product-card'>
          <img src={product.img} alt='threre is a problem' />
          <h2>{product.name}</h2>  
          <p>${product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>


          </div>

        ))
          

        }


        </div>
    );
    
  }
}
export default Products;
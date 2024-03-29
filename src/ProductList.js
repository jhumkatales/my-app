import React, { Component } from 'react';
import productsData from './productsData.json';

class ProductList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      products: productsData,
    };
 }

 render() {
    return (
      <div className="ProductList">
        <h2>Product List</h2>
        <ul>
          {Object.entries(this.state.products).map(([category, products]) => (
            <li key={category}>
              <h3>{category}</h3>
              <ul>
                {products.map(product => (
                 <li key={product.productID}>
                   <img src={product.Image} alt="product" />
                    <img src={product.Image} alt={product.productID} style={{ maxWidth: '100px' }} />
                    <img
                      src={require(`./${product.Image}`).default}
                      alt={product.productID}
                      style={{ maxWidth: '100px' }}
                    /> 
                    {product.productID} - ${product.Price}
                 </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
 }
}
console.log(productsData.Earrings[0].Image)
export default ProductList;

import React, { Component } from 'react';
import productsData from './productsData.json'; //import data from external json file

class ProductList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      products: productsData, // set state with imported data
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

export default ProductList;
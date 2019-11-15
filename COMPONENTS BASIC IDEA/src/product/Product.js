import React from 'react';

const Product = ({ product, Price, handleClick, counter }) => {
return (
    <div className="product-tile">
        <img className="product-image" src={product.image} alt={product.title} />
        <div>
          <span className="product-brand">{product.brand}</span>
          <span className="product-title">{product.title}</span>
           <Price> 
            <span>
                {product.price}$
            </span>
           </Price>
        </div>
        <button onClick= {handleClick}>Click me:{counter}</button>
      </div>
    )
};

export default Product;
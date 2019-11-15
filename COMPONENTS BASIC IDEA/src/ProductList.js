import React from 'react'
// import PropTypes from 'prop-types'
import Product from './product/Product'
import ProductPrice from './product-price/ProductPrice'

import './product-list.css'

const ProductList = (props) => {
  const { product } = props;
  const renderedProducts = product.map(prod => {
    return (<Product
      product={prod}
      Price={ProductPrice}
    />)
  })
  return (
    <div className="container">
      {renderedProducts}
    </div>
  )
}

ProductList.defaultProps = {
  counter: 0,
  product: {
    image: '',
    title: "Dummy Title",
    price: 5
  }
}

// ProductList.PropTypes = {
//   counter: PropTypes.number,
//   product: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     brand: PropTypes.string,
//     price: PropTypes.number
//   })
// }

export default ProductList

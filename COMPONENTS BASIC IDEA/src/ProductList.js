import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Product from './product/Product'
import ProductPrice from './product-price/ProductPrice'

import './product-list.css'

class ProductList extends Component {


    state = {
      counter: this.props.counter || 0, 
      title: "Hello Ecom",
      value: ''
    }
  
 
  handleClick = (event) => {
    this.setState({
      counter: this.state.counter + 1
    }) 
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    }) 
  }
 

  render(){
    const { product } = this.props;
    const { counter, title, value } = this.state;


    return (
      <div className="container">
        {title}
        <Product 
        product={product}
        Price={ProductPrice}
        handleClick = {this.handleClick}
        counter = {counter}/>
        <input onChange = {this.handleChange} />
      </div>
    )
  }
 
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

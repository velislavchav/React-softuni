import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import styles from './styles.module.css'

const Wrapper = styled.div`
   text-align: center;
   background-color: #282c34;
   min-height: 100vh;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-start;
   font-size: calc(10px + 2vmin);
   color: white;
   padding-top: 40px;

   ${props => props.red && css`
   background-color: red;
   `}
`
const renderCards = (products) => {
  return products.map(product => {
    return (
      <Fragment key = {product.id}>
        {logged(ProductCard,product)}
      </Fragment>
    )  
  })
}

class ProductList extends React.Component {
  
  state = {
    isRed: false,
    ownerName: "Placeholder"
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed
    })
  }

  componentDidMount (){
    fetch('https://api.github.com/users/k1r1L')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      this.setState({
        ownerName: json.name
      })
    })
    .then((myErr) => console.log(myErr));
  }
  render(){

    const themeClass = this.state.isRed ? styles.container : styles.redContainer
    return (
      <Fragment>
        <Header />
        <div>
          {this.state.ownerName}
        </div>
        <button onClick={this.handleClick}>Toggled Red Theme</button>
        <div className={themeClass} red = {this.state.isRed}>
          {renderCards(this.props.products)}
        </div>
      </Fragment>
    )
  }
}

ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList

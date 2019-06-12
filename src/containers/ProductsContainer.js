import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Overlay from 'react-bootstrap/Overlay'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import Category from '../components/Category'
import ProductItem from '../components/ProductItem'

const renderProduct =(product,addToCart)=>(
  <Popover id="cartpopup" title="Popover Down">
  <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id,product.quantitySelected)} />
  </Popover>
);

const ProductsContainer = ({ products, addToCart }) => (
  <Category title="Category">
    {products.map(product =>
   <OverlayTrigger trigger="click" placement="start" overlay={renderProduct(product,addToCart)}>
     <Button>{product.title}</Button>
  </OverlayTrigger>
  
    )}
  </Category>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)

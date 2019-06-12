import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked}) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      />
      <input type="number" name="quantity" id={product.id} min="1" max="10"
      onChange={()=>{
        product.quantitySelected=document.getElementById(product.id).value;
      }} />

    <button
      onClick={()=>{
      if(document.getElementById(product.id).value)
      {
        onAddToCartClicked()
        document.getElementById(product.id).value=''
      }
    }}>
    Add to cart
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem

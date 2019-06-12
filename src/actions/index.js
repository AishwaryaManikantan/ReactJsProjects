import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.fetchProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = (productId,quantitySelected) => ({
  type: types.ADD_TO_CART,
  productId,
  quantitySelected
})

export const addToCart = (productId,quantitySelected) => (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId,quantitySelected))
}
export const removeItemFromCart=(productId)=>dispatch=>{
  dispatch({
  type: types.REMOVE_FROM_CART,
  productId
})
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
 
}

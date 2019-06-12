import _products from './products.json'

const TIMEOUT = 100

export default {
  fetchProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT)
}

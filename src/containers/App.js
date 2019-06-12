import React from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Button from 'react-bootstrap/Button'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
const popover = (
  <Popover id="cartpopup" title="Popover Down">
  <CartContainer />
  </Popover>
);

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
     <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
    <Button>Cart</Button>
    </OverlayTrigger>
  </div>
)

export default App

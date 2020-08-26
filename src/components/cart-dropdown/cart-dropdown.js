import React from 'react'
import CustomButton from '../custom-button/custom-button.js'
import './cart-dropdown.styles.scss'


const CartDropdown = () => (
  <div className='cart-dropdown'>
   <div className='cart-items'>
    <CustomButton>GO TO CHECOUT </CustomButton>
   </div>
  </div>
)


export default CartDropdown

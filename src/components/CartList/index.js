import React, { useContext } from 'react';
import CartItem from './CartItem'
import CartEmpty from './CartEmpty'
import { CartContext } from 'context'
import { SearchContext } from 'context'

function CartList() {
  const [ cart ] = useContext(CartContext)
  const [ searchParam ] = useContext(SearchContext)
  let cartListToShow = [...cart]
  if(searchParam.param) {
    cartListToShow = cartListToShow.filter(item => item.name.toLowerCase().includes(searchParam.param.toLowerCase()))
  }
  return (
    <>
      {cart.length ? cartListToShow.map(item => <CartItem key={item.id} product={item} />) : <CartEmpty />}
    </>
  )
}

export default CartList
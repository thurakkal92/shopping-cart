import React, { useContext } from 'react';
import { Box } from '../Layout'
import Image from '../Image'
import Button from '../Button'

import { CartContext } from '../../context'

function ListItem({ product }) {
  const [ cart, setCart ] = useContext(CartContext)
  const { name, price, discount, image, id } = product
  function updateCart() {
    let tempCart = [ ...cart ]
    let same = tempCart.some(item => item.id === id)
    if (same) {
      tempCart = tempCart.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item)
    }
    else {
      product.count = 1
      tempCart.push(product)
    }
    setCart(tempCart)
    localStorage.setItem("cartProducts", JSON.stringify(tempCart))
  }
  return (
    <Box className="mb-6 br-4">
      <Image className="br-4" alt={name} src={image} width="100%" height={200} />
      <Box className="py-2">
        <p className="fs-3 fw-500 c-black">{name}</p>
        <Box className="pt-2" />
        <Box className="flex flex-between">
          <Box>
            <p className="fs-3 fw-700">₹{price.actual}</p>
            <p className="fs-3 fw-500 c-neutral-300" style={{
              textDecoration: 'line-through'
            }}>₹{price.display}</p>
          </Box>
          <p className="fs-3 fw-700 c-success">{discount}% off</p>
        </Box>
        <Box className="flex flex-center pt-2">
          <Button onClick={updateCart} appearance="secondary">Add to cart</Button>
        </Box>
      </Box>
    </Box>
  )
}
export default ListItem
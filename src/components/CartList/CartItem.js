import React, { useState, useContext } from 'react';
import { Box } from '../Layout'
import Image from '../Image'
import Counter from '../Counter'
import { CartContext } from 'context'

function CartItem({ product }) {
  const [ cart, setCart ] = useContext(CartContext)
  const { name, price, discount, image, count, id } = product
  const [ val, setVal ] = useState(count)
  let tempArray = [ ...cart ]
  function handleIncrement() {
    setVal(val + 1)
    tempArray = tempArray.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
    setCart(tempArray)
    localStorage.setItem('cartProducts', JSON.stringify(tempArray))
  }

  function handleDecrement() {
    setVal(val - 1)
    tempArray = tempArray.map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
    setCart(tempArray)
    localStorage.setItem('cartProducts', JSON.stringify(tempArray))
  }

  function handleDelete() {
    tempArray = tempArray.filter(item => item.id !== id)
    setCart(tempArray)
    localStorage.setItem('cartProducts', JSON.stringify(tempArray))
  }

  return (
    <Box className="bg-white br-4 px-3 py-2 mb-5 ba bw-1 bc-neutral-200">
      <Box className="flex flex-middle">
        <Box className="flex flex-start mr-8 mr-2--sm mr-2--md">
          <Image src={image} alt={name} height={120} width={120} alt="productitem" />
          <Box className="ml-4 d-none--sm d-none--md">
            <p className="fs-4 fw-700 c-neutral-400 mb-2 mt-5">{name}</p>
            <Box className="flex mt-3">
              <p className="fs-3 fw-700 pb-1 mr-2">₹{price.display}</p>
              <p className="fs-3 fw-500 c-neutral-300 mr-4" style={{
                textDecoration: 'line-through'
              }}>₹{price.actual}</p>
              <p className="fs-3 fw-700 c-success">{discount}% off</p>
            </Box>
          </Box>
        </Box>
        <Box className="d-none--sm d-none--md flex flex-middle">
          <Counter minValue={1} value={val} onDecrement={handleDecrement} onIncrement={handleIncrement} />
          <p className="fs-3 fw-700 c-pointer hover:c-primary c-neutral-400 ml-8" onClick={handleDelete}>Remove</p>
        </Box>
        <Box className="d-none d-block--sm d-block--md pl-2">
          <p className="fs-4 fw-700 c-neutral-400 mb-2 ">{name}</p>
          <Box className="flex">
            <Box>
              <p className="fs-3 fw-700 mr-2">₹{price.display}</p>
              <p className="fs-3 fw-500 c-neutral-300" style={{
                textDecoration: 'line-through'
              }}>₹{price.actual}</p>
            </Box>
            <p className="fs-3 fw-700 c-success">{discount}% off</p>
          </Box>
          <Box className="mt-3" />
          <Counter minValue={1} value={val} handleSize={24} onDecrement={handleDecrement} onIncrement={handleIncrement} />
          <p className="fs-3 fw-700 c-pointer hover:c-primary c-neutral-400 mt-2" onClick={handleDelete}>Remove</p>
        </Box>
      </Box>

    </Box>
  )
}

export default CartItem
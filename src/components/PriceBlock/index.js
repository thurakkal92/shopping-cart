import React, { useContext } from 'react';
import { CartContext } from 'context'
import { Box } from 'components/Layout'

function PriceBlock() {
  const [ cart ] = useContext(CartContext)
  console.log(cart ,"cart")
  let price = {}
  price.actual = cart.map(item => item.price.actual* item.count).reduce((acc, item) => (acc += item), 0)
  price.display = cart.map(item => item.price.display * item.count).reduce((acc, item) => (acc += item), 0)
  price.discount = price.display - price.actual
  

  return (
    <Box className="px-3 py-3 bg-white br-4 ba bw-1 bc-neutral-200">
      <p className="fs-5 fw-500">Price details</p>
      <Box className="mt-2 mb-5 bb bc-neutral-200 bw-1" />
      <Box>
        <Box className="flex flex-between pb-4">
          <p className="fs-3 c-neutral-400">Price (Items {cart.length}):</p>
          <p className="fs-3 c-neutral-400">₹{price.display}</p>
        </Box>
        <Box className="flex flex-between ">
          <p className="fs-3 c-neutral-400">Discount:</p>
          <p className="fs-3 c-neutral-400">- ₹{price.discount}</p>
        </Box>
        <Box className="mt-5 mb-2 bb bc-neutral-200 bw-1" />
        <Box className="flex flex-between">
          <p className="fs-4 c-neutral-500 fw-600">Total amount payable</p>
          <p className="fs-4 c-neutral-500 fw-600">₹{price.actual}</p>
        </Box>
      </Box>
    </Box>
  )
}

export default PriceBlock
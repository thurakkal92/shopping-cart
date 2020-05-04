import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Box } from '../Layout'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context'

function Cart() {
  const [ cart ] = useContext(CartContext)
  const count = cart.map(item => item.count).reduce((acc, item) => (acc += item), 0)
  return (
    <Link to="/cart">
      <Box className="p-relative">
        <FontAwesomeIcon className="c-white" style={{
          fontSize: '24px'
        }} icon={faShoppingCart} />
        <motion.div key={count} animate={{ scale: cart.length ? [ 0, 1.2, 1, 1 ] : 1 }} className="flex flex-center flex-middle p-absolute br-100 h-5 bg-error c-white fs-2 fw-600" style={{ width: '18px',height: '18px', top: '-8px', right: '-6px' }}>
          {count}
        </motion.div>
      </Box>
    </Link>
  )
}

export default Cart
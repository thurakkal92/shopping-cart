import React from 'react';
import { Box } from 'components/Layout'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

function CartEmpty() {
  return (
    <Box className="flex flex-middle flex-1">
      <FontAwesomeIcon style={{ fontSize: '44px' }} icon={faExclamationTriangle} className="c-neutral-300" />
      <Box className="px-4">
        <p className="fs-7 c-neutral-500 fw-700">Your cart is empty</p>
        <p className="fs-3 c-neutral-400 pt-1">Click <Link to="/">here</Link>  to go back to home page.</p>
      </Box>

    </Box>
  )
}

export default CartEmpty
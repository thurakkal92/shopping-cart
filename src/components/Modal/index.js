import React from 'react';
import ReactDOM from 'react-dom'
import { Box } from 'components/Layout'

function Modal({ isShowing, toggle, children }) {
  return (
    isShowing && ReactDOM.createPortal(
      <Box className="p-fixed flex flex-center flex-middle" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} >
        {children}
      </Box>, document.body
    )
  )
}

export default Modal

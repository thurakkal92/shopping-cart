import React from 'react';
import size from '../../../utils/size'

function Box(props) {
  const { height, width, children, ...otherProps } = props

  const boxDimension = {
    height: size(height),
    width: size(width)
  }

  return (
    <div style={boxDimension} {...otherProps}>
      {children}
    </div>
  )
}

export default Box
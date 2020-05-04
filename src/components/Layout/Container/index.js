import React from 'react';
import classNames from 'classnames'

function Container({ children, className }) {
  const containerClass = classNames('container', className)
  
  return (
    <div className={containerClass}>{children}</div>
  )
}

export default Container
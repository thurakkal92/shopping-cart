import React from 'react';
import classNames from 'classnames'

function Col(props) {
  const { 
      span,
      sm, 
      md, 
      children } = props
  const colClassName = classNames(
    span ? `col-${span}` : 'col',
    sm ? `col-${sm}--sm` : '',
    md ? `col-${md}--md` : ''
  )
  return (
    <div {...props} className={colClassName}>
      {children}
    </div>
  )
}

export default Col


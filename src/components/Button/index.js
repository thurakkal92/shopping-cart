import React from 'react';
import classNames from 'classnames';

function Button(props) {
  const { appearance, className, ...otherProps } = props;
  const btnClass = classNames(
    'py-2 fw-500 px-4 flex flex-center flex-middle fs-3 c-pointer bw-1 br-100',
    {
      'bg-primary bc-primary c-white': appearance === 'primary',
      'bg-secondary bc-secondary c-black': appearance === 'secondary'
    });
  return (
    <button style={{outline: 'none'}} className={btnClass} {...otherProps}>
      {props.children}
    </button>
  );
}

Button.defaultProps ={
  appearance: 'primary'
}

export default Button;

import React from 'react';
import classNames from 'classnames'
import './_radio.scss'

function Radio({children, ...otherProps}) {

  const radioClass = classNames(
    'radio__circle bc-primary bw-1 ba mr-2',
  )
  return (
    <label className="radio w-100p">
      <div className='flex flex-start p-relative flex-middle'>
        <input type='radio' className='radio__input d-none' {...otherProps} />
        <span
          className={radioClass}
          style={{
            width: "16px",
            height: "16px"
          }}
        ></span>
      </div>
      {children}
    </label>
  )
}

export default Radio
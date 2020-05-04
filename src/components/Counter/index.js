import React from 'react'
import classnames from 'classnames'

import size from 'utils/size';

import { ReactComponent as Add } from './icons/add.svg'
import { ReactComponent as Minus } from './icons/minus.svg'

const Counter = ({
  className,
  minValue,
  maxValue,
  value,
  handleSize,
  onDecrement,
  onIncrement
}) => {

  const minusClass = classnames('c-primary c-pointer',{
    'c-neutral-200': value <= minValue,
  })

  const plusClass = classnames('c-primary c-pointer',{
    'c-neutral-200': value >= maxValue,
  })

  const handleDecrementClick = (event) => {
    if (value <= minValue) return
    onDecrement(event)
  }

  const handleIncrementClick = (event) => {
    if (value >= maxValue) return
    onIncrement(event)
  }

  return (
    <ul className='ls-reset flex flex-middle'>
      <li className='flex-inline'>
        <Minus
          width={size(handleSize)}
          height={size(handleSize)}
          className={minusClass}
          onClick={handleDecrementClick}
        />
      </li>
      <li className={classnames('c-nuetral-400 fs-4 mx-4 flex-inline flex-center bw-2 br-2 bb bl bt br bc-neutral-300 px-3')} style={{
        width: '12px'
      }}>
        {value}
      </li>
      <li className='flex-inline'>
        <Add
          width={size(handleSize)}
          height={size(handleSize)}
          className={plusClass}
          onClick={handleIncrementClick}
        />
      </li>
    </ul>
  )
}

Counter.defaultProps = {
  minValue: 0,
  maxValue: 10,
  value: 1,
  handleSize: 24,
  onIncrement: () => { },
  onDecrement: () => { }
}

export default Counter

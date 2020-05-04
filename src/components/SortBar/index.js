import React, { useState, Children, useContext, useEffect } from 'react';
import classNames from 'classnames'
import { Box } from '../Layout'
import Modal from 'components/Modal'
import Radio from 'components/Radio'
import { SortContext } from '../../context'
import { SORT_MAP } from '../../constants'
import { useModal } from '../Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export function NavItem(props) {

  const navItemClassName = classNames('c-pointer h-10 flex-middle flex-center fs-3 fw-500 flex-inline mr-4', {
    'bb bw-3 bc-primary c-primary': props.active,
    'c-neutral-400 hover:c-primary': !props.active
  })

  return (
    <li {...props} className={navItemClassName}>
      {props.children}
    </li>
  )
}

export function Nav(props) {
  return (
    <ul>
      {Children.map(props.children, child => {
        return (
          React.cloneElement(child)
        )
      })}
    </ul>
  )
}

function SortBar(props) {
  const [sort , setSort ] = useContext(SortContext)
  const [ nav, setNav ] = useState(SORT_MAP.HIGH_TO_LOW)
  const [ radio, setRadio ] = useState(SORT_MAP.HIGH_TO_LOW)

  const {isShowing, toggle} = useModal()
  useEffect(() => {
    setSort({ type: nav })
  }, [ nav ])

  function handleApply() {
    toggle()
    setSort({ type: radio })
  }

  return (
    <>
      <Box className="d-none d-block--sm d-block--md flex bg-white px-4 py-2 w-50p">
        <Box className="flex flex-1 flex-middle flex-center px-2" onClick={toggle}>
          <FontAwesomeIcon icon={faFilter} className="c-neutral-400 mr-2 fs-3" />
          <p className="fs-4 fw-500 c-neutral-400">Sort</p>
        </Box>
        <Modal isShowing={isShowing}>
          <Box style={{
            maxWidth: '80%',
            minHeight: '200px'
          }} className="flex-1 br-4  bg-white">
            <Box style={{ height: 'calc(200px - 48px)' }} className="mt-5 px-4">
              <p className="fw-600 fs-4 c-neutral-500 mb-3">Sort options</p>
              <Box>
                <Radio checked={radio === SORT_MAP.HIGH_TO_LOW} name="sort_map" onChange={() => setRadio(SORT_MAP.HIGH_TO_LOW)}>
                  <p className="fs-3 fw-600 c-neutral-400">Price --- High Low</p>
                </Radio>
                <Box className="pt-2" />
                <Radio checked={radio === SORT_MAP.LOW_TO_HIGH} name="sort_map" onChange={() => setRadio(SORT_MAP.LOW_TO_HIGH)}>
                  <p className="fs-3 fw-600 c-neutral-400">Price --- Low High</p>
                </Radio>
                <Box className="pt-2" />
                <Radio checked={radio === SORT_MAP.DISCOUNT} name="sort_map" onChange={() => setRadio(SORT_MAP.DISCOUNT)}>
                  <p className="fs-3 fw-600 c-neutral-400">Discount </p>
                </Radio>
              </Box>

            </Box>
            <Box className="flex flex-1  flex-middle bt bw-1 bc-neutral-300">
              <Box className="flex-1 flex flex-center flex-middle fs-3 h-11 c-primary fw-500 br bw-1 bc-neutral-300" onClick={toggle}>Cancel</Box>
              <Box className="flex-1 fs-3 flex flex-center flex-middle h-11 c-primary fw-500" onClick={handleApply}>Apply</Box>
            </Box>
          </Box>

        </Modal>
      </Box>
      <Box className="flex flex-middle d-none--sm d-none--md">
        <p className="c-neutral-500 fs-4 fw-700 mr-3">Sort by:</p>
        <Nav>
          <NavItem active={nav === SORT_MAP.HIGH_TO_LOW} onClick={() => setNav(SORT_MAP.HIGH_TO_LOW)} >Price --- High Low</NavItem>
          <NavItem active={nav === SORT_MAP.LOW_TO_HIGH} onClick={() => setNav(SORT_MAP.LOW_TO_HIGH)}  >Price --- Low High</NavItem>
          <NavItem active={nav === SORT_MAP.DISCOUNT} onClick={() => setNav(SORT_MAP.DISCOUNT)} >Discount</NavItem>
        </Nav>
      </Box>
    </>
  )
}

export default SortBar
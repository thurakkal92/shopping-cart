import React, { useState, useContext } from 'react';
import InputRange from 'react-input-range';

import { FiltersContext } from '../../context'

import { Box } from '../Layout'
import Modal from 'components/Modal'
import Button from '../Button'
import { useModal } from 'components/Modal/useModal'
import 'react-input-range/lib/css/index.css'
import './_filter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function Filter() {
  const [ range, setRange ] = useContext(FiltersContext)
  const [ val, setVal ] = useState(range)
  const { isShowing, toggle } = useModal()
  function handleApply() {
    toggle()
    setRange(val)
  }
  return (
    <>
      <Box className="d-none d-block--sm d-block--md flex px-4 py-2 bg-white w-50p br bw-1 bc-neutral-300">
        <Box className="flex flex-1 flex-middle flex-center px-2" onClick={toggle}> 
          <FontAwesomeIcon icon={faSort} className="mr-2 c-neutral-400" />
          <p className="fs-4 c-neutral-400 fw-500">Filter</p>
        </Box>
        <Modal isShowing={isShowing}>
          <Box style={{
            maxWidth: '90%',
            minHeight: '200px'
          }} className="flex-1 br-4  bg-white">
            <Box style={{ height: 'calc(200px - 48px)' }} className="mt-5 px-3">
              <p className="fw-600 fs-4 c-neutral-500 mb-10">Filter options</p>
              <Box className="px-4"> 
                <InputRange
                  maxValue={200000}
                  minValue={100}
                  value={val}
                  onChange={value => setVal(value)} />
              </Box>

            </Box>
            <Box className="flex flex-1  flex-middle bt bw-1 bc-neutral-300">
              <Box className="flex-1 flex flex-center flex-middle fs-3 h-11 c-primary fw-500 br bw-1 bc-neutral-300" onClick={toggle}>Cancel</Box>
              <Box className="flex-1 fs-3 flex flex-center flex-middle h-11 c-primary fw-500" onClick={handleApply}>Apply</Box>
            </Box>
          </Box>

        </Modal>
      </Box>
      <Box className="d-none--sm d-none--md">
        <Box className="px-2">
          <InputRange
            maxValue={200000}
            minValue={100}
            value={val}
            onChange={value => setVal(value)} />
        </Box>
        <p className="ta-center fs-3 fw-600 c-neutral-400">Price</p>
        <Box className="flex flex-center pt-2">
          <Button onClick={() => setRange(val)}>Apply</Button>
        </Box>
      </Box>
    </>
  )


}

export default Filter
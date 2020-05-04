import React from 'react';
import { Box } from '../Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

function Placeholder({ height, width }) {
  return (
    <Box width={width} height={height} className="z-10 p-relative bg-neutral-200 flex-inline flex-middle flex-center">
      <FontAwesomeIcon className="c-neutral-400" style={{ fontSize: '32px' }} icon={faImage} />
    </Box>
  )
}

export default Placeholder
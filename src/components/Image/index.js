import React, { useState } from 'react';
import { Box } from '../Layout'
import Placeholder from './placeholder'
import { motion } from 'framer-motion'
import size from '../../utils/size'

function Image(props) {
  const { src, height, width,alt, ...otherProps } = props
  const [ loaded, setLoaded ] = useState(false)

  return (
    <Box className="flex-inline p-relative" height={height} width={width}>
      {!loaded &&
        <Placeholder className="flex-1" height={height} width={width} />
      }
      <motion.div className="p-absolute h-100p w-100p" style={{ overflow: 'hidden' }} transition={{ duration: 0.5 }} animate={{ opacity: loaded ? 1 : 0 }}>
        <img
          {...otherProps}
          alt={alt}
          src={src}
          width={size(width)}
          height={size(height)}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)} />
      </motion.div>
    </Box>
  )
}

export default Image
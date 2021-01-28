import React from 'react'
import { motion } from 'framer-motion'

function ImageCard (props) {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.6 }}
      >
        <img style={{ width: '100px' }} src={props.item.img} alt='' />
      </motion.button>
    </div>
  )
}

export default ImageCard

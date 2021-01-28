import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ImageCard (props) {
  return (
    <div>
      <Link to={`/:${props.name}`} />
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

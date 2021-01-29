import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ImageCard (props) {
  return (
    <Link to={`/${props.item.name.toLowerCase()}`} >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40
        }}
      >
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.6 }}
        >
          <img style={{ width: '100%' }} src={props.item.image} alt='' />
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default ImageCard

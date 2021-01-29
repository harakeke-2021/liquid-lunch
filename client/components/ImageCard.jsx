import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ImageCard (props) {
  const link = props.item.drinkId ? `/drink/${props.item.drinkId}` : `/${props.item.name.toLowerCase()}`

  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={link} >
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
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.6 }}
        >
          <img style={{
            height: '250px',
            width: '250px',
            objectFit: 'cover',
            borderRadius: '15%'
          }} src={props.item.image} alt='' />
          <h3 style={{ textAlign: 'center' }}>{props.item.name}</h3>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default ImageCard

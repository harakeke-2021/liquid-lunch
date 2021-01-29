import React from 'react'
import hash from 'hash-string'

import ImageCard from './ImageCard'

import flavours from '../../data/flavours'

function Home () {
  return (
    <div className='container'>
      <h1 className='item-a header'>I am feeling ...</h1>
      <div className='cardHolder'>
        {
          flavours.map((flavour) => (
            <ImageCard key={hash(flavour.name)} item={flavour} />
          ))
        }
      </div>
    </div>
  )
}

export default Home

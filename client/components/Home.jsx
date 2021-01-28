import React from 'react'
import hash from 'hash-string'

import ImageCard from './ImageCard'

import flavours from '../../data/flavours'

function Home () {
  return (
    <>
      <h1>Liquid-Lunch</h1>
      {
        flavours.map((flavour) => (
          <ImageCard key={hash(flavour.name)} item={flavour} />
        ))
      }
    </>
  )
}

export default Home

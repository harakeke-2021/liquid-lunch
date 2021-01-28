import React from 'react'

import flavours from '../../data/flavours'
import ImageCard from './ImageCard'

function Home() {
  return (
    <>
      <h1>Liquid-Lunch</h1>
      {
        flavours.map((flavour) => {
          <ImageCard item={flavour} />
        })
      }
    </>
  )
}

export default Home

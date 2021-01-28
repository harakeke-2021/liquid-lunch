import React from 'react'
import hash from 'hash-string'

import ImageCard from './ImageCard'

import ingredients from '../../data/ingredients'

function Ingredients (props) {
  return (
    <div className='container'>
      <h1>Choose an Ingredient</h1>
      {
        ingredients.map(ingredient => (
          <ImageCard key={hash(ingredient.name)} item={ingredient} />
        ))
      }
    </div>
  )
}

export default Ingredients

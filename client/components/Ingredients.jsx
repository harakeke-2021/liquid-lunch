import React from 'react'
import { Link } from 'react-router-dom'

import ImageCard from './ImageCard'

import ingredients from '../../data/ingredients'

function Ingredients (props) {
  return (
    <div className='container'>
      <h1>Choose an Ingredient</h1>
      {
        ingredients.map(ingredient => (
          <ImageCard item={ingredient} />
        ))
      }
    </div>
  )
}

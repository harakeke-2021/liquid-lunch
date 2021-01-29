import React from 'react'
import hash from 'hash-string'

import ImageCard from './ImageCard'

import ingr from '../../data/ingredients'
import cocktails from '../../data/cocktails'

function Ingredients (props) {
  const drinks = cocktails.filter((cocktail) => {
    return cocktail.flavor.toLowerCase() === props.match.params.flavour
  })

  const mainIngr = drinks.map(drink => {
    console.log(typeof drink)
    return {
      name: drink.ingredients[0],
      image: ingr.find(itm => itm.name === drink.ingredients[0]).image,
      drinkId: drink.id
    }
  })

  console.log('matching ingredients:', mainIngr)
  console.log('matching drinks:', drinks)
  console.log('ingredients:', ingr)
  return (
    <div className='container'>
      <h1>Choose an Ingredient</h1>
      {
        mainIngr.map(ingredient => (
          <ImageCard key={hash(ingredient.name)} item={ingredient} />
        ))
      }
    </div>
  )
}

export default Ingredients

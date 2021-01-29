import React from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <>
      <div className='container'>
        <h1 className='item-a header'>With a hint of ...</h1>
        <div className='cardHolder'>
          {
            mainIngr.map(ingredient => (
              <ImageCard key={hash(ingredient.name)} item={ingredient} />
            ))
          }
        </div>
        <Link className='item-e' to={'/'}>
          <button className='btn'>
            Not Feeling It...
          </button>
        </Link>
      </div>
    </>
  )
}

export default Ingredients

import React from 'react'
import hash from 'hash-string'

import cocktails from '../../data/cocktails'

function Drink (props) {
  const id = Number(props.match.params.id)

  const result = cocktails.find((cocktail) => {
    return cocktail.id === id
  })

  return (
    <div className='container'>
      <div className='item-d drinkImage'>
        <img src={result.image} alt={result.name} />
        <h3>{result.name}</h3>
        <h4>Ingredients</h4>
        <ul className='ingredients'>
          {result.ingredients.map((ingredient) => {
            return (<li key={hash(ingredient)}>{ingredient}</li>)
          })}
        </ul>
        <p>{result.preparation[0]}</p>

      </div>
    </div>
  )
}

export default Drink

import React from 'react'
import hash from 'hash-string'
import cocktails from '../../data/cocktails'
import { Link } from 'react-router-dom'

function Drink (props) {
  const id = Number(props.match.params.id)

  const result = cocktails.find((cocktail) => {
    return cocktail.id === id
  })

  return (
    <div className='container'>
      <div className='item-d'>
        <div>
          <img className='drinkImage' src={result.image} alt={result.name} />
        </div>
        <div>
          <h3>{result.name}</h3>
          <h4>Ingredients</h4>
          <ul className='ingredients'>
            {result.ingredients.map((ingredient) => {
              return (<li key={hash(ingredient)}>{ingredient}</li>)
            })}
          </ul>
          <p>{result.preparation[0]}</p>
          <Link to={'/'}>Another Round?</Link>
        </div>
      </div>
    </div>
  )
}

export default Drink

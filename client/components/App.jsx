import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Ingredients from './Ingredients'
import Drink from './Drink'

const App = () => {
  return (
    <>
      <Route exact path="/:flavour" component={Ingredients} />
      <Route exact path="/" component={Home} />
      <Route path="/drink/:id" component={Drink} />
    </>
  )
}

export default App

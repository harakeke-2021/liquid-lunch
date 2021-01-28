import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Ingredients from './Ingredients'

const App = () => {
  return (
    <>
      <Home />
      <Route exact path="/:flavour" component={Ingredients} />
    </>
  )
}

export default App

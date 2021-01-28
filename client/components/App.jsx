import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Ingredients from './Ingredients'

const App = () => {
  return (
    <>
      <Route exact path="/:flavour" component={Ingredients} />
      <Route exact path="/" component={Home} />
    </>
  )
}

export default App

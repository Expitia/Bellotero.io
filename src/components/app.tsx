import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Calculator from '../containers/calculator'
import Header from '../containers/header'
import Testimonial from '../containers/testimonial'
import { Views } from '../domain/models'

const App = () => (
  <div className="d-flex flex-column justify-content-md-center w-100 h-100">
    <Header />
    <Switch>
      <Route path={Views.REVIEWS}>
        <Testimonial />
      </Route>
      <Route path={Views.CALCULATOR}>
        <Calculator />
      </Route>
      <Route exact path={Views.DEFAULT} />
    </Switch>
  </div>
)

export default App

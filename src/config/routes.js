import React from 'react'
import { IndexRedirect, IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Cats from '../containers/cats'
import NoPageFound from '../containers/no-page-found'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Cats} />
    <Route path="*" component={NoPageFound}/>
  </Router>
)

export default Routes

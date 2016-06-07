React  = require 'react'
Router = require 'react-router'
{Route, DefaultRoute, NotFoundRoute} = Router

MeowMain = require './components/meow-main'
App = require './app'

routes =
  <Route handler={App} path="/">
    <DefaultRoute handler={MeowMain} />
    <NotFoundRoute handler={MeowMain} />
  </Route>

Router.run routes, (Handler) ->
  React.render(<Handler/>, document.getElementById('app'))

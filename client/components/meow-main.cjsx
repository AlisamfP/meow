React = require('react')

Meow = React.createClass
  displayName: 'Meow'

  getInitialState: ->
    console.log "HEY"
    cats: "Hello, World"

  render: ->
    return(
      <div className="meow">
        <h1>this.state.cats</h1>
      </div>
    )

module.exports = Meow

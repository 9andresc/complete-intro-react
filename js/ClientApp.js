const React = require('react')
const ReactDOM = require('react-dom')

var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, 'This is my first component')
      )
    )
  }
})

var myFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null, [
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle)
      ])
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

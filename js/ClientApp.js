const React = require('react')
const ReactDOM = require('react-dom')

const MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, 'This is my first component')
      )
    )
  }
})

const MyTitleFactory = React.createFactory(MyTitle)

const MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null, [
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null)
      ])
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

const React = require('react')
const ReactDOM = require('react-dom')

const MyTitle = React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

const MyTitleFactory = React.createFactory(MyTitle)

const MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null, [
        MyTitleFactory({ title: 'props are the best', color: 'peru' }),
        MyTitleFactory({ title: 'semicolons are the worst', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'jklol its okay if you like semicolons', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'i\'m out of ideas', color: 'tomato' })
      ])
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))

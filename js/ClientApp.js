import React from 'react'
import ReactDOM from 'react-dom'

import MyTitle from './MyTitle'

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

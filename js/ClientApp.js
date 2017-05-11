import { HashRouter, Match } from 'react-router'
import React from 'react'
import { render } from 'react-dom'

import '../public/normalize.css' // eslint-disable-line
import '../public/style.css' // eslint-disable-line

import Landing from './Landing'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

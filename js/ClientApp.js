import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import { render } from 'react-dom'

import '../public/normalize.css' // eslint-disable-line
import '../public/style.css' // eslint-disable-line

import Landing from './Landing'
import Search from './Search'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/search' component={Search} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))

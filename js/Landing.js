import { Link } from 'react-router-dom'
import React from 'react'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
}

export default Landing

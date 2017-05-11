import React from 'react'

import preload from '../public/data'
import ShowCard from './ShowCard'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(show => (
          <ShowCard show={show} />
        ))}
      </div>
    )
  }
}

export default Search

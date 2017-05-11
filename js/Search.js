import React from 'react'

import preload from '../public/data'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(show => (
          <h3 key={show.imdbID}>{show.title}</h3>
        ))}
      </div>
    )
  }
}

export default Search

import React from 'react'

class ShowCard extends React.Component {
  render () {
    const { description, poster, title, year } = this.props.show

    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired
}

export default ShowCard

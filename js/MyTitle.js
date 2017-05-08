import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

export default React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render () {
    const style = { color: this.props.color }

    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

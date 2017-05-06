import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

export default React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title)
      )
    )
  }
})

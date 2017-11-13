import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hover extends Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.object,
    styles: PropTypes.object
  }

  render() {
    const { styles } = this.props.children.props
    return (
      <div style={Object.assign({ ...styles }, { zIndex: 1 })}>
        {this.props.children.props.children}
      </div>
    )
  }
}

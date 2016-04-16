import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class GraphElement extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.selection = d3.select(findDOMNode(this))
        .call(this.enter)
        .call(this.update)
  }

  componentDidUpdate(prevProps) {
    this.selection.call(this.update)
  }

  render() {
    return (
      <g {...this.props}>
        { this.props.children }
      </g>
    )
  }
}

GraphElement.propTypes = {
  xScale: PropTypes.func,
  yScale: PropTypes.func
}

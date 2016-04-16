import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'

import CircleCluster from 'components/CircleCluster'

class CriteriaGroup extends Component {
  componentDidMount() {
    const node = findDOMNode(this)

    if (!node) return

    setTimeout(() => {
      d3.select('svg').attr({
        width: function() {
          return this.parentNode.offsetWidth
        },
        height: function() {
          return this.parentNode.offsetHeight
        }
      })
    })
  }

  render() {
    const { criteriaSets, filteredApplicants=[] } = this.props

    const data = filteredApplicants

    return (
      <svg className="criteria-group">
        <CircleCluster data={data} />
      </svg>
    )
  }
}

export default autobind(CriteriaGroup)

const mapStateToProps = (state) => ({
  criteriaSets: state.criteriaSets
})

export default connect((mapStateToProps))(CriteriaGroup)

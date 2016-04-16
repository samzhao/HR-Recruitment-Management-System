import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, RouteHandler } from 'react-router'
import { newPosition, createPosition } from '../../redux/modules/positions'
import classes from './CriteriaSetView.scss'

import CriteriaSets from 'containers/CriteriaSets'
import CriteriaGroup from 'containers/CriteriaGroup'

import Icon from 'components/Icon'

export default class CriteriaSetView extends Component {
  render() {
    const { positions=[] } = this.props

    return (
      <div className="criteria-set-view row">
        <div className="col-xs-12" style={{ height: '130px' }}>
          <a href="#" className="link" onClick={
            e => {
              e.preventDefault();
              this.props.history.goBack()
            }
          }>
            <Icon name="ion-ios-arrow-back" />
            {' Back'}
          </a>
          <h2>Find Applicants</h2>
        </div>
        <div className="col-xs-12 row" style={{ height: '100%' }}>
          <div className="col-xs-9">
            <CriteriaGroup />
          </div>
          <div className="col-xs-3">
            <h3 className={classes.h3}>Criteria Sets</h3>
            <CriteriaSets />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  positions: state.positions
})

export default connect((mapStateToProps), {
  newPosition,
  createPosition
})(CriteriaSetView)

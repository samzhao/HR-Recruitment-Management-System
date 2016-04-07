import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import classes from './ApplicantDetailView.scss'

import CriteriaSets from 'containers/CriteriaSets'
import ApplicantAvatar from 'components/ApplicantAvatar'
import Icon from 'components/Icon'
import EditableRadar from 'containers/EditableRadar'
import Resume from 'components/Resume'

export default class ApplicantDetailView extends Component {
  render() {
    const { params, applicants, criteriaSets=[] } = this.props

    const id = params.id
    const applicant = applicants.find(app => +app.id === +id)
    const name = applicant.name.first.toUpperCase() + ' ' + applicant.name.last.toUpperCase()
    const location = _.capitalize(applicant.location.city) + ', ' + _.startCase(applicant.location.state)

    const avatarStyle = {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      marginRight: '12px',
      marginBottom: '-8px'
    }

    const skillsLabels = applicant.skillDistribution.map(skill => skill.label)
    const skillsValues = applicant.skillDistribution.map(skill => skill.value)

    let applyCriteriaSetsBtn = null

    if (criteriaSets.length) {
      applyCriteriaSetsBtn = (
        <button className="find-candidates-btn">Find Candidates</button>
      )
    }

    return (
      <div className="applicant row">
        <div className="col-xs-12">
          <a href="#" className="link" onClick={
            e => {
              e.preventDefault();
              this.props.history.goBack()
            }
          }>
            <Icon name="ion-ios-arrow-back" />
            {' Back'}
          </a>
          <h2 style={{marginBottom: 0}}>
            <ApplicantAvatar url={applicant.image} style={avatarStyle} />
            { name }
          </h2>
        </div>

        <div className="col-xs-12" style={{color: '#888'}}>
          { location }
        </div>

        <div className="col-xs-6">
          <h3 className={classes.h3}>Resume</h3>
          <div className="applicant-resume">
            <Resume applicant={ applicant }/>
          </div>
          <div className="applicant-supporting-docs">
            <small>Supporting Docs</small>
          </div>
        </div>

        <div className="col-xs-6">
          <div className="row">
            <div className="col-xs-12">
              <h3 className={classes.h3}>Skills Overview</h3>
              <EditableRadar labels={skillsLabels} values={skillsValues} editable={false} color={[226, 122, 112]} />
            </div>
            <div className="col-xs-12">
              <h3 className={classes.h3} style={{ marginBottom: '10px' }}>
                Criteria Sets
                { applyCriteriaSetsBtn }
              </h3>
              <CriteriaSets />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//            <iframe src="http://philipcdavis.com/resume/formal" frameBorder="0" width="100%" height="600px"></iframe>

const mapStateToProps = (state) => ({
  applicants: state.applicants,
  criteriaSets: state.criteriaSets
})

export default connect((mapStateToProps), {})(ApplicantDetailView)

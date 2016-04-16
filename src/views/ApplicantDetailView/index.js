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
  getAverageSkillDistribution(positionId) {
    const { applicants } = this.props
    positionId = parseInt(positionId, 10)

    const applicantSkillDists = applicants.filter(app => {
      let positionIds = app.positions.map(pos => pos.id)
      return positionIds.includes(positionId)
    }).map(app => app.skillDistribution)

    const skillsLabels = applicantSkillDists[0].map(skill => skill.label)
    const skillsValues = skillsLabels.map(skill => {
      let skillDist = applicantSkillDists.map(dist => {
        return dist.find(d => d.label === skill).value
      })
      return +_.mean(skillDist).toFixed(1)
    })

    return {
      skillsLabels, skillsValues
    }
  }

  render() {
    const { params, location, applicants, criteriaSets=[] } = this.props

    const id = params.id
    const { positionId } = location.query
    const applicant = applicants.find(app => +app.id === +id)
    const name = applicant.name.first.toUpperCase() + ' ' + applicant.name.last.toUpperCase()
    const applicantLocation = _.capitalize(applicant.location.city) + ', ' + _.startCase(applicant.location.state)

    const avatarStyle = {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      marginRight: '12px',
      marginBottom: '-8px'
    }

    const skillsLabels = applicant.skillDistribution.map(skill => skill.label)
    let skillsValues = applicant.skillDistribution.map(skill => skill.value)

    if (!_.isEmpty(positionId) || positionId === 0) {
      let positionSkillsValues = this.getAverageSkillDistribution(positionId).skillsValues
      skillsValues = [skillsValues, positionSkillsValues]
    }

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
          { applicantLocation }
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
              <EditableRadar multiple={true} labels={skillsLabels} values={skillsValues} editable={false} color={[226, 122, 112]} />
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

const mapStateToProps = (state) => ({
  applicants: state.applicants,
  criteriaSets: state.criteriaSets
})

export default connect((mapStateToProps), {})(ApplicantDetailView)

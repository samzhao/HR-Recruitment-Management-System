import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import autobind from 'autobind-decorator'

import classes from './ApplicantDetailView.scss'

import CriteriaSets from 'containers/CriteriaSets'
import ApplicantAvatar from 'components/ApplicantAvatar'
import Icon from 'components/Icon'
import EditableRadar from 'containers/EditableRadar'
import Resume from 'components/Resume'

class ApplicantDetailView extends Component {
  contextTypes: {
    router: React.PropTypes.func.isRequired
  }
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

  findApplicant(direction) {
    const { applicants, params, location } = this.props
    const id = parseInt(params.id, 10)
    let { positionId } = location.query
    positionId = parseInt(positionId, 10)

    const positionApplicants = applicants.filter(app => {
      return _.some(app.positions, { id: positionId })
    })

    const applicant = _.find(applicants, { id })
    const applicantIndex = _.findIndex(positionApplicants, { id })

    let newId = null

    if (direction === 'next') {
      if (applicantIndex === positionApplicants.length - 1) {
        newId = 0
      } else {
        newId = applicantIndex+1
      }
    } else if (direction === 'prev') {
      if (applicantIndex === 0) {
        newId = positionApplicants.length - 1
      } else {
        newId = applicantIndex-1
      }
    } else {
      newId = 0
    }

    return { newId: positionApplicants[newId].id, positionId }
  }

  goToApplicant(id, positionId) {
    console.log(id)
    console.log(this.context.router)
    this.context.router.push(`/applicants/${id}?positionId=${positionId}`)
  }

  onNext(e) {
    e.preventDefault()
    const { newId, positionId } = this.findApplicant('next')
    this.goToApplicant(newId, positionId)
  }
  onPrev(e) {
    e.preventDefault()
    const { newId, positionId } = this.findApplicant('prev')
    this.goToApplicant(newId, positionId)
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
        <Link to="/criteria" className="find-candidates-btn">Find Candidates</Link>
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
          <h3 className={classes.h3}>
            <div className="row">
              <div className="col-xs-10">Resume</div>
              <div className="col-xs-2" style={{textAlign: 'right'}}>
                <a href="#" onClick={this.onPrev} className="direction-btn"><Icon name="ion-ios-arrow-back"/></a>
                <a href="#" onClick={this.onNext} className="direction-btn"><Icon name="ion-ios-arrow-forward"/></a>
              </div>
            </div>
          </h3>
          <div className="applicant-resume">
            <Resume applicant={ applicant }/>
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

ApplicantDetailView.contextTypes = {
  router: PropTypes.object.isRequired
}

export default autobind(ApplicantDetailView)

const mapStateToProps = (state) => ({
  applicants: state.applicants,
  criteriaSets: state.criteriaSets
})

export default connect((mapStateToProps), {})(ApplicantDetailView)

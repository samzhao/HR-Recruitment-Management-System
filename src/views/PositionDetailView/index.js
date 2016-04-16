import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classes from './PositionDetailView.scss'

import EditableRadar from 'containers/EditableRadar'
import ApplicantsList from 'components/ApplicantsList'
import Icon from 'components/Icon'

export default class PositionDetailView extends Component {
  getAverageSkillDistribution(position) {
    const { applicants } = this.props

    const applicantSkillDists = applicants.filter(app => {
      let positionIds = app.positions.map(pos => pos.id)
      return positionIds.includes(position.id)
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

  renderTopApplicants(position) {
    const applicants = this.props.applicants.filter(app => {
      const posIds = app.positions.map(pos => pos.id)
      return posIds.includes(position.id)
    })

    return <ApplicantsList positionId={position.id} applicants={applicants} />
  }

  render() {
    const { params, positions } = this.props

    const id = params.id
    const position = positions.find(pos => +pos.id === +id)
    const status = position.status.toLowerCase().split(' ').join('-')

    const badgeStyle = {
      marginLeft: '15px',
      fontSize: '0.45em',
      top: '-4px',
      position: 'relative'
    }

    const { skillsLabels, skillsValues } = this.getAverageSkillDistribution(position)

    return (
      <div className="position row">
        <div className="col-xs-12">
          <Link to="/positions" className="link">
            <Icon name="ion-ios-arrow-back"/>
            {' Positions'}
          </Link>
          <h2 style={{marginBottom: 0}}>
            { position.title }
            <span style={badgeStyle} className={"badge badge-"+status}>{ position.status }</span>
          </h2>
        </div>
        <div className="col-xs-12" style={{color: '#888'}}>
          { position.location }
        </div>

        <div className="col-xs-6">
          <h3 className={classes.h3}>Top Applicants</h3>
          { this.renderTopApplicants(position) }
        </div>

        <div className="col-xs-6">
          <h3 className={classes.h3}>Skill Distribution</h3>
          <EditableRadar labels={skillsLabels} values={skillsValues} editable={false} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  positions: state.positions,
  applicants: state.applicants
})

export default connect((mapStateToProps), {})(PositionDetailView)

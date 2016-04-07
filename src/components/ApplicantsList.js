import React, { Component } from 'react'
import { Link } from 'react-router'

import ApplicantAvatar from './ApplicantAvatar'

export default class ApplicantsList extends Component {
  renderApplicants() {
    const { applicants, positionId } = this.props

    return applicants.map(applicant => {
      const status = applicant.positions.find(pos => pos.id === positionId)
      const applicantStatus = status ? status.status : ''
      const s = applicantStatus.toLowerCase().split(' ').join('-')

      return (
        <div className="col-xs-2 applicant" key={applicant.id}>
          <Link to={`/applicants/${applicant.id}`} style={{marginBottom: '35px'}}>
            <ApplicantAvatar name={applicant.name} url={applicant.image} />
            <div className={"applicant-status badge badge-"+s}>
              { applicantStatus }
            </div>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="applicants row">
        { this.renderApplicants() }
      </div>
    )
  }
}

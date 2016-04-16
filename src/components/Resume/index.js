import React, { Component } from 'react'
import Avatar from 'components/ApplicantAvatar'
import classes from './Resume.scss'

import Keyword from 'components/Keyword'

export default class Resume extends Component {
  render() {
    const { applicant } = this.props
    let { name, image, location, duration, history, education, role, skillDistribution } = applicant

    name = _.capitalize(name.first) + ' ' + _.capitalize(name.last)
    location = _.capitalize(location.city)
    let skills = skillDistribution.map(dist => dist.label)

    return (
      <div className={ classes.resume }>
        <div className={ `${classes.section} ${classes.intro}` }>
          <div className={ classes.wrapper }>
            <p>Hi, I'm { name }</p>
            <div className="row" style={{ margin: '30px 0' }}>
              <div className="col-xs-2">
                <Avatar url={ image } />
              </div>
              <div className="col-xs-10">
                <h1>
                  I live in <br/>
                  <span style={{ fontSize: "47px" }}>{ location }</span>
                </h1>
              </div>
              <div className="col-xs-12">
                <p>
                  { name } is an industry professional who has helped many companies in the field to dramatically increase results. With plenty experience in the field, { name } continues to surprise new clients and employers with great results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={ `${classes.education} ${classes.section} ${classes.second}` }>
          <div className={ classes.wrapper }>
            <h1>Education & <br/> Certifications</h1>
            <ul className={ `${classes.educationList} ${classes.listFlat}` }>
              {
                education.map((ed, index) => (
                  [
                    <li>
                      <strong>
                        <Keyword type="program" word={ ed.program } />
                      </strong>{ '—  ' }
                      <Keyword type="institution" word={ ed.institute }/>
                    </li>
                  ]
                ))
              }
            </ul>
          </div>
        </div>

        <div className={ `${classes.work} ${classes.section} ${classes.second}` }>
          <div className={ classes.wrapper }>
            <h1>Work<br/>Experiences</h1>
            <ul className={ `${classes.workList} ${classes.listFlat}` }>
              {
                history.map((hist, index) => (
                  [
                    <li style={{ fontSize: '0.8em', marginBottom: '-3px', marginTop: '12px' }}>
                      { hist.start_date }
                    </li>,
                    <li>
                      <span style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2em' }}>
                        <Keyword type="company" word={ hist.company } />
                      </span>{ '—  ' }<Keyword type="position" word={ hist.position }/>
                    </li>
                  ]
                ))
              }
            </ul>
          </div>
        </div>

        <div className={ `${classes.skills} ${classes.section} ${classes.second}` }>
          <div className={ classes.wrapper }>
            <h1>Technical<br/>Skills</h1>
            <ul className={ `${classes.skillList} ${classes.listFlat}` }>
              { skills.map((skill, index) => (
                <li key={index}><Keyword type="skill" word={ skill } /></li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

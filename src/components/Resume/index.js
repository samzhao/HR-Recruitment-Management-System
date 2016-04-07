import React, { Component } from 'react'
import Avatar from 'components/ApplicantAvatar'
import classes from './Resume.scss'

import Keyword from 'components/Keyword'

export default class Resume extends Component {
  render() {
    const { applicant } = this.props
    let { name, image, location, duration, history, role, skillDistribution } = applicant

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

        <div className={ `${classes.work} ${classes.section} ${classes.second}` }>
          <div className={ classes.wrapper }>
            <h1>Work<br/>Experiences</h1>
            <ul className={ `${classes.workList} ${classes.listFlat}` }>
              {
                history.map((hist, index) => (
                  [
                    <li style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2em', marginBottom: '-5px', marginTop: '6px' }}>
                      <Keyword type="company" word={ hist.company } />
                    </li>,
                    <li>
                      { hist.position }
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

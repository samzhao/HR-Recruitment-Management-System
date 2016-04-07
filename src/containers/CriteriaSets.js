import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import { addCriteriaSet, editCriteriaSet, removeCriteriaSet } from '../redux/modules/criteriaSets'

const acceptedTypes = [
  'applicant',
  'position',
  'skill',
  'keyword'
]

class CriteriaSets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDropping: false
    }
  }

  drop(e) {
    e.preventDefault()

    var data

    try {
      data = JSON.parse(e.dataTransfer.getData('data'))
    } catch (e) {
      return
    }

    this.setState({ isDropping: false })

    let criteriaCount = this.props.criteriaSets.length+1
    const criteriaSet = {
      id: _.uniqueId('criteriaSet'),
      name: criteriaCount ? 'New Criteria Set ' + criteriaCount : 'New Criteria Set',
      criteria: [data]
    }

    this.props.addCriteriaSet(criteriaSet)
  }

  overlapDrop(set, e) {
    e.preventDefault()
    e.stopPropagation()

    var data

    try {
      data = JSON.parse(e.dataTransfer.getData('data'))
    } catch (e) {
      return
    }

    this.setState({ isDropping: false })

    let existingSet = _.clone(set)
    existingSet.criteria.push(data)

    this.props.editCriteriaSet(existingSet)
  }

  dragOver(e) {
    e.preventDefault()

    this.setState({ isDropping: true })
  }

  dragLeave(e) {
    this.setState({ isDropping: false })
  }

  toggleExclude(criterion, set) {
    let index = _.findIndex(set.criteria, criterion)
    let cloneSet = _.clone(set)
    cloneSet.criteria[index] = _.merge(criterion, {
      isExcluded: !criterion.isExcluded
    })

    this.props.editCriteriaSet(cloneSet)
  }

  removeCriterion(criterion, set) {
    let index = _.findIndex(set.criteria, criterion)
    let cloneSet = _.clone(set)
    cloneSet.criteria.splice(index, 1)

    this.props.editCriteriaSet(cloneSet)
  }

  render() {
    const { params, criteriaSets, removeCriteriaSet } = this.props
    const { isDropping } = this.state
    let helperText = isDropping ? 'Drop To Create Criteria Set' : [
      'Drag And Drop Keywords From Resume',
      <br/>,
      'To Create Criteria Sets'
    ]

    let content = (
      <div className={ "col-xs-12 drop-zone" + (isDropping ? ' is-dropping' : '') }>
        { helperText }
      </div>
    )

    if (criteriaSets.length) {
      content = (
        <div className="criteria-sets">
          {
            criteriaSets.map(set => (
              <div className="criteria-set" key={ set.id } onDrop={ this.overlapDrop.bind(this, set) }>
                <button className="btn-close" onClick={ removeCriteriaSet.bind(this, set) }>×</button>
                <div className="cs-header">
                  <input type="text" defaultValue={ set.name }/>
                </div>
                <div className="cs-body">
                  { set.criteria.map(criterion => (
                    <div className="criterion" key={ criterion.id }>
                      <button className={ "criterion-toggle" + (criterion.isExcluded ? ' active' : '') } onClick={ this.toggleExclude.bind(this, criterion, set) }></button>
                      <div className="criterion-content">{ criterion.text }</div>
                      <button className="btn-close" onClick={ this.removeCriterion.bind(this, criterion, set) }>×</button>
                    </div>
                  )) }
                </div>
              </div>
            ))
          }
        </div>
      )
    }

    return (
      <div className="row" style={{padding: '0 .5rem'}} onDragOver={ this.dragOver } onDragLeave={ this.dragLeave } onDrop={ this.drop }>
        { content }
      </div>
    )
  }
}

export default autobind(CriteriaSets)

const mapStateToProps = (state) => ({
  criteriaSets: state.criteriaSets,
})

export default connect((mapStateToProps), { addCriteriaSet, editCriteriaSet, removeCriteriaSet })(CriteriaSets)

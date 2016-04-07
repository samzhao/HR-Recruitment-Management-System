import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, RouteHandler } from 'react-router'
import { newPosition, createPosition } from '../../redux/modules/positions'
import classes from './PositionsView.scss'

export default class PositionsView extends Component {
  addPosition(e) {
    e.preventDefault()
  }

  renderPosition(position) {
    const status = position.status.toLowerCase().split(' ').join('-')

    return (
      <div className="col-xs-3 card" key={position.id}>
        <Link to={`/positions/${position.id}`}>
          <div className="row middle-xs">
            <div className="card-title col-xs-12 col-md-9">
              { position.title }
            </div>
            <div className="card-accessory col-xs-12 col-md-3">
              <div className={"badge badge-"+status}>
                { position.status }
              </div>
            </div>
            <div className="card-brief">
              <ul>
                <li>{ position.location }</li>
                <li>{ position.salary }</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  render() {
    const { positions=[] } = this.props

    return (
      <div className="positions">
        <h2>Positions</h2>
        <div className="row cards">
          { positions.map(this.renderPosition.bind(this)) }
          <div className="col-xs-3 card add-btn">
            <div className="row" style={{
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <a href="#" className="col-xs" onClick={this.addPosition.bind(this)}>
                +
              </a>
            </div>
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
})(PositionsView)

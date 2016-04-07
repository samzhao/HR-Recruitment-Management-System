import React, { Component } from 'react'
import { Radar } from 'react-chartjs'
import SliderEditor from 'components/SliderEditor'
import _ from 'lodash'

import Chart from 'chart.js'
// Chart.defaults.global.responsive = true

export default class EditableRadar extends Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props)
  }

  render() {
    const { labels, values, editable, width, height, color } = this.props

    if (_.isEmpty(labels) || _.isEmpty(values)) return null

    const [r, g, b] = color ? color : [151,187,205]

    const data = {
      labels,
      datasets: [{
        fillColor: `rgba(${r},${g},${b},0.2)`,
        strokeColor: `rgba(${r},${g},${b},1)`,
        pointColor: `rgba(${r},${g},${b},1)`,
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: values
      }]
    }

    return (
      <div className="editable-radar" style={{textAlign: "center"}}>
        <Radar data={data} redraw options={{}} height={height || '300px'} width={width || '300px'} />
        { editable && <SliderEditor data={data}/> }
      </div>
    )
  }
}

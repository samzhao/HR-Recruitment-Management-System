import React from 'react'
import { DragSource } from 'react-dnd'
import _ from 'lodash'

const source = {
  beginDrag(props) {
    return { name: props.name }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      console.info('Dropped ' + item.name + ' ' + dropResult.name)
    }
  }
}

// @DragSource('applicant', source, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// }))
export default class ApplicantAvatar extends React.Component {
  render() {
    let { name, url, style, connectDragSource, isDragging } = this.props
    name = name ? name.first.toUpperCase() + ' ' + name.last.toUpperCase() : null
    style = _.merge(style, {
      backgroundImage: `url(${url})`
    })

    return (
      <div className="applicant-avatar" style={style}>
        { name &&
          <div className="applicant-name">
            {name}
          </div>
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import classes from './Keyword.scss'

class Keyword extends Component {
  dragStart(e) {
    const { type, word } = this.props

    let data = {
      id: _.uniqueId('keyword'),
      type,
      text: word
    }

    this.crt = document.createElement('span')
    this.crt.className += 'drag-item'
    this.crt.innerHTML = `
      <span class="item-type">${type}</span>
      <span class="item-content">${word}</span>
    `

    document.body.appendChild(this.crt)

    e.dataTransfer.setData('data', JSON.stringify(data))
    e.dataTransfer.setDragImage(this.crt, 0, 0)
  }

  dragEnd(e) {
    if (!this.crt) return
    document.body.removeChild(this.crt)
  }

  render() {
    const { word, style={}, className='', type } = this.props

    return (
      <span className={ `keyword ${className} ${classes.keyword}` }
            style={ style }
            draggable='true'
            onDragStart={ this.dragStart }
            onDragEnd={ this.dragEnd }>
        { word }
      </span>
    )
  }
}

export default autobind(Keyword)

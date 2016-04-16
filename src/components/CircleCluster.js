import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import GraphElement from 'components/GraphElement'
import autobind from 'autobind-decorator'
import d3 from 'd3'

var json = {
  name: 'Root',
  children: [{
    name: 'Set 1',
    children: [{
      name: 'App 1',
      size: 10
    }, {
      name: 'App 2',
      size: 7
    }, {
      name: 'App 3',
      size: 12
    }]
  }, {
    name: 'Set 2',
    children: [{
      name: 'App 5',
      size: 11
    }, {
      name: 'App 6',
      size: 15
    }]
  }]
}

const margin = 20

function dragstarted(d) {
  d3.event.sourceEvent.stopPropagation()
  d3.select(this).classed("dragging", true)
}

function dragged(d) {
  d.x += d3.event.dx
  d.y += d3.event.dy
  d3.select(this).attr('transform', (d, i) => `translate(${d.x}, ${d.y})`)
}

function dragended(d) {
  d3.select(this).classed("dragging", false)
}

const color = d3.scale.category20()

@autobind
export default class CircleCluster extends GraphElement {
  constructor(props) {
    super(props)

    this.pack = null
    this.diameter = 0
    this.nodes = null
  }

  enter(selection) {
    const drag = d3.behavior.drag()
        .origin(d => d)
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended)

    setTimeout(() => {
      const parentWidth = selection.node().parentNode.width.animVal.value
      const parentHeight = selection.node().parentNode.height.animVal.value

      this.diameter = parentWidth

      const pack = d3.layout.pack()
        .padding(2)
        .size([this.diameter - margin, this.diameter - margin])
        .value(d => d.size)


      selection
        .attr({
          width: parentWidth,
          height: parentHeight
        })
        .style('transform', 'translate(0, 5px)')

      this.nodes = pack.nodes(json)

      const node = selection.datum(json).selectAll('.node').data(pack.nodes).enter()
        .append('g')
        .attr('class', d => d.parent ? d.children ? "node" : "node node--leaf" : "node node--root")
        .attr('transform', d => `translate(${d.x}, ${d.y - (this.diameter/4)})`)

      node.append('circle')
        .attr('r', d => d.r)
        .style('fill', d => d.parent ? color(d.depth) : 'none')
    }, 100)
  }

  update(selection) {
    if (!this.pack || !this.diameter || !this.nodes) return
  }

  render() {
    return (
      <g {...this.props}>
        { this.props.children }
      </g>
    )
  }
}

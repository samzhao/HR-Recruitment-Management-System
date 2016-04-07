import React from 'react'
require('ionicons/dist/scss/ionicons.scss')

export default ({ name, component }) => (
  React.createElement((component || 'span'), {
    className: 'icon ' + (name.indexOf('ion-') === 0 ? name : `ion-${name}`)
  })
)

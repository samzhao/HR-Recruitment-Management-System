import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import PositionsView from 'views/PositionsView'
import PositionDetailView from 'views/PositionDetailView'

import ApplicantDetailView from 'views/ApplicantDetailView'
import CriteriaSetView from 'views/CriteriaSetView'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRedirect to='/positions' />
    <Route path='/positions'>
      <IndexRoute component={PositionsView} />
      <Route path=':id' component={PositionDetailView}></Route>
    </Route>
    <Route path='/applicants'>
      <Route path=':id' component={ApplicantDetailView}></Route>
    </Route>
    <Route path='/criteria' component={CriteriaSetView}>
    </Route>
  </Route>
)

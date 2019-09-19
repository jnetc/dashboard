import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Sensors from './sensors'
import SensorData from './sensor-data'
import ScrollToTop from '../../../reusable/scroll-restoration'

const SensorsRouter = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/dashboard/sensors" component={ Sensors } exact />
        <Route path="/dashboard/sensors/:id" component={ SensorData }/>
      </Switch>
    </ScrollToTop>
  )
}
export default withRouter(SensorsRouter)
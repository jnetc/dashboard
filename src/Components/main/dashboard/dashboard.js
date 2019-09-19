import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ProgressSteps from '../../_progress-steps'

const Dashboard = (props) => {
  const { history } = props
  return (
    <div className="page">
      <ProgressSteps history={ history }/>
      Dashboard
      <Link to="/dashboard/infrastructure">SENSORS</Link>
    </div>
  )
}
const mapStateToProps = (state) => {
  // console.log(state);
  
  return {
    infrastructure: state.infrastructure
  }
}
export default connect(mapStateToProps)(withRouter(Dashboard))
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { sitemapActionPanel, sendCalculatedRoute, getRouteCoordinates } from '../../../Actions/actions'

const ActionPanel = (props) => {
  const [ getRoute, setGetRoute ] = useState(Boolean)
    // Array values for coordinates data
  const [ arrRoute, setArrRoute ] = useState({})
    // Destruction
  const { dispatch, actionPanel, infrastructure, machines, tags, tools, trucks } = props
    // Spread all in one array
  const allPointers = [...infrastructure, ...machines, ...tags, ...tools, ...trucks]
    // Find corrent pointer
  const findCorentPointer = allPointers.filter(pointer => {
    let findedData
    if (pointer.id === actionPanel.id) {
      if (pointer.location.pos !== undefined ) {
        // console.log(pointer);
        findedData = pointer
      }
    }
    return findedData
  })

  const { id, location } = findCorentPointer[0]

    // Get start position coordinate
  const startRoute = () => {
    if (location.pos.x !== isNaN && location.pos.y !== isNaN) {
      setArrRoute({
        startPoint: {
          x: location.pos.x,
          y: location.pos.y
        }  
      })
      setGetRoute(true)
    }
  }

    // Get end position coordinate
  const endRoute = () => {
    if (location.pos.x !== isNaN && location.pos.y !== isNaN) {
      setArrRoute({
        ...arrRoute,
        endPoint: {
          x: location.pos.x,
          y: location.pos.y
        },
        fig: 'https://firebasestorage.googleapis.com/v0/b/petsense-dev.appspot.com/o/images%2Fmaps%2Fmyyrmaki_turbiini.jpg?alt=media&token=e7c36cde-3c39-43b7-844b-3cff6ae19ba4'
      })
    }
  }
  
  // Send coordinates to calculate route
  const sendCoordinates = (e) => {
    e.preventDefault()
    dispatch(sendCalculatedRoute(arrRoute))
  }
    // RESET ROUTE
  const resetR = () => {
    setGetRoute(false)
    dispatch(getRouteCoordinates({}))
  }
    // Close Action Panel
  const closePanel = () => {
    dispatch(sitemapActionPanel(false, id))
    resetR()
  }

  // console.log(arrRoute);
  
  return (
    <article id="sm-act_panel">
      {/* <legend>Action Panel</legend> */}
      <div className="ap_section">
        <div>
          <button className="sm-rt-bt">Status</button>
          <button className="sm-rt-bt" onClick={ resetR }>Reset</button>
          <button className="sm-rt-bt" id="sm-alert-btn">Alert</button>
          <button className="sm-rt-bt" id="sm-cancel-btn" onClick={ closePanel }>Cancel</button>
        </div>
        <form onSubmit={ sendCoordinates } id="sm-route-data">
          <div className="sm-route-value">
            { !getRoute ? 
              `Current pos: x ${location.pos.x }, y ${location.pos.y}` :
              `Current pos: x ${arrRoute.startPoint.x}, y ${arrRoute.startPoint.y}`
            }
          </div>
          { !getRoute && <span className="sm-rt-bt sm-route-btn" onClick={ startRoute }>Ok</span> }
          <CSSTransition
            in={ getRoute }
            timeout={ 200 }
            unmountOnExit>
            <div className="show-sm-route-to">
              <div className="sm-route-value">
                {`Destination: x ${location.pos.x}, y ${location.pos.y}`}  
              </div>
              <button className="sm-rt-bt sm-route-btn" onClick={ endRoute }>Calculate Route</button>
            </div>
          </CSSTransition>
        </form>
      </div>
      <div className="ap_section">
        <div>
          <div className="ap_legenda">
            <i className="icon-gateway"></i>
            <span>Gateway, Beacon</span>
          </div>
          <div className="ap_legenda">
            <i className="icon-tools"></i>
            <span>Tool</span>
          </div>
          <div className="ap_legenda">
            <i className="icon-stationary"></i>
            <span>Machine</span>
          </div>
        </div>
        <div>
          <div className="ap_legenda">
            <i className="icon-infrastructure"></i>
            <span>Wear</span>
          </div>
          <div className="ap_legenda">
            <i className="icon-vehicle"></i>
            <span>Vehicle</span>
          </div>
          <div className="ap_legenda">
            <i className="icon-exitlight"></i>
            <span>Exit Light</span>
          </div>
        </div>
      </div>
    </article>
  )
}

const mapStateToProps = (state) => {   
  return {
    infrastructure: state.infrastructure,
    machines: state.machines,
    tags: state.tags,
    tools: state.tools,
    trucks: state.trucks,
    actionPanel: state.actionPanel
  }
}
export default connect(mapStateToProps)(ActionPanel)
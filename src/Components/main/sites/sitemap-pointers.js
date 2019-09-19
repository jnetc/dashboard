import React from 'react'
import Gateway from './pointer-gateway'
import Helmet from './pointer-helmet'
import Vehicle from './pointer-vehicle'
import Machine from './pointer-machine'
import Spotlight from './pointer-spotlight'
import Tools from './pointer-tools'
import ExitLight from './pointer-exitlight'

  // EXITLIGHT Pointer Options
export const MapExitlightPointer = (props) => {
  // Get ID, location & deviceInfo  
  const { id, location, deviceInfo } = props.data
  // console.log(location);
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 7,
    y: y - 10
  }  
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }

  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
           <circle
             id={ id } cx={x} cy={y} r="15" className="pointer-bg-map exitlight-pointer-fill map_point-alert" opacity=".8"
             onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
           <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
           <ExitLight pos={ coord }/>
         </g>

        )
      } else {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <ExitLight pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>          
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <ExitLight pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <ExitLight pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map exitlight-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <ExitLight pos={ coord }/>
        </g>
      )
  }
}
  // INFRASTRUCTURE - GATEWAY, BEACON Pointer Options
export const MapInfrastructurePointer = (props) => {
  // Get ID, location & deviceInfo
  const { id, location, deviceInfo } = props.data
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 11,
    y: y - 11
  }
    // Check for undefined process / status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map infrastructure-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Gateway pos={ coord }/>
            {/* <circle cx={x} cy={y} r="2" fill="red"/> */}
          </g>
        )
      } else {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Gateway pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Gateway pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Gateway pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map infrastructure-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Gateway pos={ coord }/>
        </g>
      )
  }
}


  // MASHINES Pointer Options
export const MapMachinesPointer = (props) => {
    // Get ID, location & deviceInfo    
  const { id, location, deviceInfo } = props.data  
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 12,
    y: y - 12
  }
    // Ellipse option "DANGER RADIUS"
  const { angle, rx, ry } = location.safetyEllipseParameters
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map machine-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="assets-pointer pointer-br-map"/>
            <Machine pos={ coord }/>
          </g>
        )
      } else {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="assets-pointer pointer-br-map"/>
            <Machine pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="assets-pointer pointer-br-map"/>
          <Machine pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="assets-pointer pointer-br-map"/>
          <Machine pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map machine-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="assets-pointer pointer-br-map"/>
          <Machine pos={ coord }/>
        </g>
      )
  }
}

  // SPOTLIGHT Pointer Options
export const MapSpotlightPointer = (props) => {
    // Get ID, location & deviceInfo    
  const { id, location, deviceInfo } = props.data
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 10,
    y: y - 10
  }
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map exitlight-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Spotlight pos={ coord }/>
          </g>
        )
      } else {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Spotlight pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Spotlight pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Spotlight pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map exitlight-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Spotlight pos={ coord }/>
        </g>
      )
  }
}

  // TOOLS Pointer Options
export const MapToolsPointer = (props) => {
    // Get ID, location & deviceInfo    
  const { id, location, deviceInfo } = props.data
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 10,
    y: y - 10
  }
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map tools-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Tools pos={ coord }/>
          </g>
        )
      } else {
        return (
          <g>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Tools pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Tools pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Tools pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map tools-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Tools pos={ coord }/>
        </g>
      )
  }
}


  // TRUCKS Pointer Options
export const MapVehiclesPointer = (props) => {
    // Get ID, location & deviceInfo
    
  const { id, location, deviceInfo } = props.data
  // console.log(location);
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 12,
    y: y - 12
  }
    // Ellipse option "DANGER RADIUS"
  const { angle, rx, ry } = location.safetyEllipseParameters
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map vehicle-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Vehicle pos={ coord }/>
          </g>
        )
      } else {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Vehicle pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Vehicle pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Vehicle pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map vehicle-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Vehicle pos={ coord }/>
        </g>
      )
  }
}
  // WEARS Pointer Options
  export const MapPeoplesPointer = (props) => {
    // Get ID, location & deviceInfo   
  const { id, location, deviceInfo } = props.data
    // Position values
  let x
  let y
    // Check for undefined location
  if (location.pos !== undefined) {
    x = location.pos.x !== undefined && location.pos.x
    y = location.pos.y !== undefined && location.pos.y
  }
    // Icon centered position
  const coord = {
    x: x - 11,
    y: y - 12
  }
    // Ellipse option "DANGER RADIUS"
  const { angle, rx, ry } = location.safetyEllipseParameters
    // Check for undefined process/ status
  let pointerStatus = {}
  if (deviceInfo.process) {
    pointerStatus = deviceInfo.process
  }
  
  switch (pointerStatus.status) {
    case 'NOT OK':
      if (deviceInfo.assetStatus === 'active' || deviceInfo.assetStatus === 'stationary' ) {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map wear-pointer-fill map_point-alert" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Helmet pos={ coord }/>
          </g>
        )
      } else {
        return (
          <g>
            <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
            <circle 
              id={ id } cx={x} cy={y} r="15" className="pointer-bg-map map_point-alert status-alert-fill" opacity=".8"
              onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
            <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
            <Helmet pos={ coord }/>
          </g>
        )
      }
    case 'UNKNOWN':
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Helmet pos={ coord }/>
        </g>
      )
    case undefined:
      return (
        <g>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map status-disable-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Helmet pos={ coord }/>
        </g>
      )
    default:
      return (
        <g>
          <ellipse cx={x} cy={y} rx={rx} ry={ry}  transform={`rotate(${angle},${x},${y})`} className="danger_radius" opacity=".25"/>
          <circle 
            id={ id } cx={x} cy={y} r="15" className="pointer-bg-map wear-pointer-fill" opacity=".8"
            onMouseMove={ props.show } onMouseOut={ props.hide } onMouseDown={ props.action }/>
          <circle cx={x} cy={y} r="15" className="pointer-br-map"/>
          <Helmet pos={ coord }/>
          {/* <circle className="watch_dot" cx="15" cy="15" r="4" fill="red" /> */}
        </g>
      )
  }
}
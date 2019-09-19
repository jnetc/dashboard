import React from 'react'
import { connect } from  'react-redux'

  // POINTERS
import { MapMachinesPointer,
         MapVehiclesPointer,
         MapPeoplesPointer,
         MapInfrastructurePointer,
         MapToolsPointer,
         MapExitlightPointer,
         MapSpotlightPointer } from './sitemap-pointers'
import RouteMapLine from './sitemap-route'

const InsideMap = (props) => {

    const { url, svgBlendColor, tags, infrastructure, machines, tools, trucks,
            zoombox, showTooltip, hideTooltip, actionPanel } = props

        ///////// COMPUTE POINTERS
        // Compute all pointers on the map

      // INFRASTRUCTURE pointers
    const infrastructureMapPointer = infrastructure.map(point => {
        // Check for position values in data
      const check = point.location !== undefined && infrastructure.length > 0
        // STATIONARY POINTERS without danger radius
      const pos = check && point.location.pos
        // MOVING POINTERS with danger radius
      const rad = check && point.location.pos && point.location.safetyEllipseParameters
        // Check TYPE values
      const type = point.deviceInfo !== undefined     
      
        // WEAR - people
      if (type && point.deviceInfo.type === "wear") {
        return rad && <MapPeoplesPointer
              key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
      }
        // WHEEL - vehicle
      if (type && point.deviceInfo.type === "wheel") {
        return rad && <MapVehiclesPointer
              key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
      } 
        // EXITLIGHT
      if (type && point.deviceInfo.type === "exitlight") {
        return pos && <MapExitlightPointer
              key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
      } 
        // SPOTLIGHT
      if (type && point.deviceInfo.type === "spotlight") {
        return pos && <MapSpotlightPointer
              key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
      } 
        // GATEWAY, BEACON - infrastructure
      return pos && type && <MapInfrastructurePointer 
             key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
      
    })
      // MACHINES pointer
    const mashineMapPointer = machines.map(point => {
        // Check for position values in data
      const check = point.location !== undefined && machines.length > 0
      const pos = check && point.location.pos && point.location.safetyEllipseParameters
      // Return needed data
      return pos && <MapMachinesPointer 
                        key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
    })
      // TAGS pointer
    const tagMapPointer = tags.map(point => {
        // Check for position values in data
      const check = point.location !== undefined && tags.length > 0
      const pos = check && point.location.pos && point.location.safetyEllipseParameters
        // Return needed data
      return pos && <MapVehiclesPointer
                        key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
    })
      // TOOLS pointer
    const toolMapPointer = tools.map(point => {
        // Check for position values in data
      const check = point.location !== undefined && tools.length > 0
      const pos = check && point.location.pos
      // Return needed data
      return pos && <MapToolsPointer
                        key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
    })
      // TRUCKS pointer
    const truckMapPointer = trucks.map(point => {
        // Check for position values in data
      const check = point.location !== undefined && trucks.length > 0
      const pos = check && point.location.pos && point.location.safetyEllipseParameters
      // Return needed data
      return pos && <MapVehiclesPointer 
                        key={ point.id } data={ point } show={ showTooltip } hide={ hideTooltip } action={ actionPanel }/>
    })
    
    return (
      <svg className="sites__map_area" 
            viewBox={`0 0 ${ zoombox }`}>
  
        <defs>
          <filter id="spotlight">
            <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
                floodColor={ svgBlendColor } floodOpacity="1"/>
            <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
          </filter>
        </defs>
        <image className="source_map" width="100%" height="100%" xlinkHref={ url } style={{ filter: 'url(#spotlight)' }} />
        <svg viewBox={`0 0 ${ zoombox }`}>
          { infrastructureMapPointer }
          { mashineMapPointer }
          { tagMapPointer }
          { toolMapPointer }
          { truckMapPointer }
          <RouteMapLine/>
        </svg>
      </svg>
    )
  }

const mapStateToProps = (state) => {  
  return {
    infrastructure: state.infrastructure,
    machines: state.machines,
    tags: state.tags,
    tools: state.tools,
    trucks: state.trucks
  }
}
export default connect(mapStateToProps)(InsideMap)
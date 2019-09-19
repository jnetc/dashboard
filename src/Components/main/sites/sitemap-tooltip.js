import React from 'react'
import { connect } from 'react-redux'

  // TOOLTIP COMPONENT
const Tooltip = (props) => {  
  
  const { infrastructure, machines, tags, tools, trucks, pointerData, coordinates, mapPosition, showTooltip } = props
    
    // Check for hover action
  if (!showTooltip ) {
    return <div></div>
  }
    // Get HOVERED ID
  let { id } = pointerData[0]
    // Find corrent data
  const findInfrastructureID = infrastructure.filter(data => data.id === id)
  const findMachinesID = machines.filter(data => data.id === id)
  const findTagsID = tags.filter(data => data.id === id)
  const findToolsID = tools.filter(data => data.id === id)
  const findTrucksID = trucks.filter(data => data.id === id)
    // Check & Write corrent data in value
  let tooltipData
  if (findInfrastructureID.length !== 0 ) {
    tooltipData = findInfrastructureID
  } else if (findMachinesID.length !== 0 ) {
    tooltipData = findMachinesID
  } else if (findTagsID.length !== 0 ) {
    tooltipData = findTagsID
  } else if (findToolsID.length !== 0 ) {
    tooltipData = findToolsID
  } else if (findTrucksID.length !== 0 ) {
    tooltipData = findTrucksID
  }
    // Destruction
  const { deviceInfo, report } = tooltipData[0]
    // Tooltip coordinat on the Map
  let coordX = coordinates.x - mapPosition.x
  let coordY = coordinates.y - mapPosition.y

  // console.log(coordX, coordY);
  // console.log('***********************');
  
  // console.log(coordinates, mapPosition);
  
    // Get tooltip element
  const tooltipEl = document.querySelector('.show_hover-tooltip')
  
    // Writing value for style
  let position
    // Check for coordinates & tooltip
  if (coordY && coordX !== isNaN && tooltipEl !== null) {
      // Tooltip height for automatic expand + 20 for triangle
    const ttipHeight = tooltipEl.offsetHeight - 35
    position = { top: coordY, left: coordX, transform: `translate(-50%, -${ttipHeight}px)` }
  }
  
    // Check comments if have STATUS "NOT OK" or "UNKNOWN"
  let commentStatus = {}
  if (deviceInfo.process) {
    commentStatus = deviceInfo.process
  } 

    // PROCESS STATUS / OK, NOT OK, UNKNOWN
  const processStatus = (value) => {
    switch (value) {
      case 'OK':
        return 'ttip_active status-good-bg'
      case 'NOT OK':
        return 'ttip_active status-alert-bg'
      default:
        return 'ttip_disable status-disable-bg'
    }
  }
  const processStatusBorder = (value) => {
    switch (value) {
      case 'OK':
        return 'show_hover-tooltip status-good-br'
      case 'NOT OK':
        return 'show_hover-tooltip status-alert-br'
      default:
        return 'show_hover-tooltip status-disable-br'
    }
  }

    // ASSET STATUS / active, stationary, alert, disable
  const assetsStatus = (value) => {
    switch (value) {
      case 'active':
        return 'status-good-bg'
      case 'stationary':
        return 'status-good-bg'
      case 'alert':
        return 'status-alert-bg'
      default:
        return 'status-disable-bg'
    }
  }

  const serialnumber = "25:45:87:78:65:78"

  return (
    <fieldset id={ id } 
              className={ processStatusBorder(commentStatus.status) }
              style={ position }>
      <legend className="names-c">
        <div>Status:</div> 
        <span className={ processStatus(commentStatus.status) }></span>
      </legend>
      <ul id="ttip_ids">
        { commentStatus.comment !== undefined && 
          <li className="ttip_comm_alert">
            <h4>{ commentStatus.comment }</h4>
          </li>
        }
        <li>
          <span className="names-c">Type:</span>
          <h4>{ deviceInfo.type }</h4>
        </li>
        <li>
          <span className="names-c">Network ID:</span>
          <h4>{ id }</h4>
        </li>
        <li>
          <span className="names-c">S/N:</span>
          <h4>{ serialnumber }</h4>
        </li>
        <li >
          <h4 className={`ttip_as_stat ${assetsStatus(deviceInfo.assetStatus)}`}>{ deviceInfo.assetStatus }</h4>
        </li>
      </ul>
      <ul id="ttip_val">
        <li className="ttip_line">
          <i className="icon-temperature"></i>
          <span className="names-c">Temperature:</span>
          <div>{ report.temperature ? report.temperature : `--` }°C</div>
        </li>
        <li className="ttip_line">
          <i className="icon-humidity"></i>
          <span className="names-c">Humidity:</span>
          <div>{ report.humidity ? report.humidity : `--` }%</div>
        </li>
        <li className="ttip_line">
          <i className="icon-air-pressure"></i>
          <span className="names-c">Air Pressure:</span>
          <div>{ report.airPressure ? report.airPressure : `` }kPa</div>
        </li>
        <li className="ttip_line">
          <i className="icon-elevation"></i>
          <span className="names-c">Elevation:</span>
          <div>{ report.elevation ? report.elevation : `--` }m</div>
        </li>
        <li className="ttip_line">
          <i className="icon-voc"></i>
          <span className="names-c">Voc:</span>
          <div>{ report.voc ? report.voc : `--` }</div>
        </li>
        <li className="ttip_line">
          <i className="icon-timestamp"></i>
          <span className="names-c">Timestamp:</span>
          <div>{ report.lastConnection ? report.lastConnection : `--` }</div>
        </li>
      </ul>
    </fieldset>
  )
}

const mapStateToProps = (state) => {  
  return {
    infrastructure: state.infrastructure,
    machines: state.machines,
    tags: state.tags,
    tools: state.tools,
    trucks: state.trucks,
    tooltip: state.tooltip
  }
}
export default connect(mapStateToProps)(Tooltip)
import React from 'react'
import { connect } from 'react-redux'
import ProgressSteps from '../../_progress-steps'
import { CSSTransition } from  'react-transition-group'

// COMPONENTS
import InsedeMap from './map'
import Tooltip from './sitemap-tooltip'
import ActionPanel from './sitemap-action-panel'
import GoogleMap from './google-map/goodle-map'

import { sitemapActionPanel } from '../../../Actions/actions'

class SiteMap extends React.Component {

  state = {
    pointerData: {},
    coordinates: {},
    mapPos: {},
    tooltip: false,
    viewbox: "2000 1300",
    zoombox: "2000 1300",
    mapSwitch: false,
  }
  componentDidMount() {
    this.setState(() => ({
      mapSwitch: false
    }))
  }

  render() {
        
    const { dispatch, infrastructure, machines, tags, tools, trucks, history, sites } = this.props   
  
      ///////// MAP OPTION
    // const map = 'myyrmaki_turbiini.jpg'
    const url = `https://firebasestorage.googleapis.com/v0/b/petsense-dev.appspot.com/o/images%2Fmaps%2Fmyyrmaki_turbiini.jpg?alt=media&token=e7c36cde-3c39-43b7-844b-3cff6ae19ba4`
    // const map = 'myyrmaki_turbiini.jpg'
    // const url = `${ process.env.PUBLIC_URL }/img/building_maps/${ map }`
    // const viewBox = "2000 1300"
    // const localMap = document.querySelector('.source_map')
  
      // Get body color for blend mode
    const bodyColor = document.querySelector('body')
    const svgBlendColor = getComputedStyle(bodyColor).backgroundColor
    
    
    ///////// HOVER TOOLTIP OPTION 
    // Hover event for filter data & send to tooltip
    const showTooltip = (e) => {
      if (e.target.id) {
        
        // Take map coordinates x, y
        const mapPosition = document.querySelector('.sites__map_area').getScreenCTM()
        const mapX = mapPosition.e
        const mapY = mapPosition.f
        // const mapPosition = localMap.getBoundingClientRect()    
          // Take pointer coordinates x, y
        const pointerX = e.clientX
        const pointerY = e.clientY
        
          // Find corrent pointer data from arrays
        const findInfrastructureID = infrastructure.filter(data => data.id === e.target.id)
        const findMachinesID = machines.filter(data => data.id === e.target.id)
        const findTagsID = tags.filter(data => data.id === e.target.id)
        const findToolsID = tools.filter(data => data.id === e.target.id)
        const findTrucksID = trucks.filter(data => data.id === e.target.id)
          // Check for length array
        const checkForTarget = (val) => val.length !== 0 && this.setState({ pointerData: val })
        checkForTarget(findInfrastructureID)      
        checkForTarget(findMachinesID)
        checkForTarget(findTagsID)
        checkForTarget(findToolsID)
        checkForTarget(findTrucksID)        

          // CHANGE STATE
        this.setState(() => ({
          mapPos: { x: mapX, y: mapY },
          coordinates: { x: pointerX, y: pointerY },
          tooltip: true,
        }))
      }
    }
     
      // HIDE TOOLTIP
    const hideTooltip = (e) => {
      this.setState(() => ({
        tooltip: false
      }))
    }

    ///////// ROUTING / ACTION PANEL 
    const actionPanel = () => {
      dispatch(sitemapActionPanel(true, this.state.pointerData[0].id))      
    }    
    
    

      // ZOOMING OPTION
      // Corsort pointer changes
      
    // const getSvgMap = document.querySelector('.sites__map_area')
    //   // Get viewbox Height & transform to Number for compute
    // const getZoombox = this.state.zoombox.split(' ')
    // const heightZoombox = Number(getZoombox.shift())
    // const widthZoombox = getZoombox.pop()
    // const getViewbox = this.state.viewbox.split(' ')
    // const heightViewbox = Number(getViewbox.shift())
    // // const widthViewbox = getViewbox.pop()

    // const zoomPlus = () => {
    //   const zoomIn = (heightZoombox / 1.2).toString()
    //   if (heightViewbox > heightZoombox) {
    //     getSvgMap.classList.add('drag_pointer')    
    //   }
    //   this.setState({
    //     zoombox: `${ zoomIn } ${ widthZoombox }`
    //   })
    // }

    // const zoomMinus = () => {
    //   const zoomIn = (heightZoombox * 1.2).toString()
    //   if (heightViewbox === heightZoombox) {
    //     getSvgMap.classList.remove('drag_pointer')
    //   }
    //   this.setState({
    //     zoombox: `${ zoomIn } ${ widthZoombox }`
    //   })
    // }
    const indoor = () => {
      this.setState(() => ({
        mapSwitch: false
      }))
      
    }
    const outdoor = () => {
      this.setState(() => ({
        mapSwitch: true
      }))
      
    }
     
    return (
      <div className="item-motion page">
        <ProgressSteps history={ history } stepSitemapName={ sites }/>
        <CSSTransition
          in={ this.props.actionPanel.show }
          timeout={ {enter: 500, exit: 300 }}
          unmountOnExit>
          <ActionPanel/>
        </CSSTransition>
        {/* <button className="btn" onClick={ zoomPlus }>Zoom Plus</button>
        <button className="btn" onClick={ zoomMinus }>Zoom Minus</button> */}
        <section className="sites__map_container" style={{ width: '100%'}}>
          <div id="map_switcher">
            <button onClick={ indoor } 
                    className={ this.state.mapSwitch ? "sm-rt-bt" : "sm-rt-bt active"}>Indoor</button>
            <button onClick={ outdoor } 
                    className={ this.state.mapSwitch ? "sm-rt-bt active" : "sm-rt-bt"}>Outdoor</button>
          </div>
          { this.state.mapSwitch ? <GoogleMap/> : <InsedeMap
                                                url={ url }
                                                svgBlendColor={ svgBlendColor }
                                                zoombox={ this.state.zoombox }
                                                showTooltip={ showTooltip }
                                                hideTooltip={ hideTooltip }
                                                actionPanel={ actionPanel }
                                              />
          }
          
          
          { this.state.tooltip && 
            <Tooltip 
              pointerData={ this.state.pointerData }
              coordinates={ this.state.coordinates }
              mapPosition={ this.state.mapPos }
              showTooltip={ this.state.tooltip } /> }
        </section>
      </div>
    )
  }
    
}

const mapStateToProps = (state) => {       
  return {
    sites: state.sites,
    infrastructure: state.infrastructure,
    machines: state.machines,
    tags: state.tags,
    tools: state.tools,
    trucks: state.trucks,
    actionPanel: state.actionPanel
  }
}

export default connect(mapStateToProps)(SiteMap)
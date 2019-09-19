import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import GoogleMapReact from 'google-map-react';
// import './google-map.scss';
 
const Marker = ({ data }) => {
  const [ show, setShow ] = useState(false)  
  return (
    <div className={ show ? "icon-map-pointer-bg ontop" : "icon-map-pointer-bg" }
      onMouseMove={ () => setShow(true) }
      onMouseOut={ () => setShow(false) }>
      <i className="icon-gateway"></i>
      <div className={ show ? "gmap-label move" : "gmap-label" }>
        <p>{ data.label }</p>
      </div>
      <CSSTransition
        in={ show }
        timeout={200}
        className="gmap-tooltip"
        unmountOnExit>
        <ul >
          <li>
            <span>Temperature:</span>
            <div>{ data.temperature ? data.temperature : `--` }°C</div>
          </li>
          <li>
            <span>Humidity:</span>
            <div>{ data.humidity ? data.humidity : `--` }%</div>
          </li>
          <li>
            <span>Air Pressure:</span>
            <div>{ data.airPressure ? data.airPressure : `--` }kPa</div>
          </li>
          <li>
            <span>Elevation:</span>
            <div>{ data.elevation ? data.elevation : `--` }m</div>
          </li>
          <li>
            <span>Voc:</span>
            <div>{ data.voc ? data.voc : `--` }</div>
          </li>
          <li>
            <span>Timestamp:</span>
            <div>{ data.eventTimestamp ? data.eventTimestamp : `--` }</div>
          </li>
          <li>
            <span>Latitude:</span>
            <div>{ data.lat ? data.lat : `--` }</div>
          </li>
          <li>
            <span>Longitude:</span>
            <div>{ data.lng ? data.lng : `--` }</div>
          </li>
        </ul>
      </CSSTransition>
    </div>
  )
}
  

 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 60.258787,
      lng: 24.844539
    },
    zoom: 18,
    map: ["SATELLITE", "ROADMAP"]
  };
  render() {
    
    const coordArr = []
    this.props.infrastructure.forEach(lat => {
      if (lat.location !== undefined) {
        if (lat.location.geoCoordinate !== undefined) {
          let eventTimestamp = lat.location.geoCoordinate.eventTimestamp
          let current = Date.now();
          if(current-(eventTimestamp*1000) <= 2*24*60*60*1000*100000000) { // 30 minutes
            coordArr.push({
              label: "Octo " +lat.id.substring(lat.id.length-5, lat.id.length).replace(":",""),
              lat: lat.location.geoCoordinate.latitude,
              lng: lat.location.geoCoordinate.longitude,
              eventTimestamp: eventTimestamp,
              airPressure: lat.report.airPressure,
              elevation: lat.report.elevation,
              humidity: lat.report.humidity,
              temperature: lat.report.temperature,
              voc: lat.report.voc
            })
          }
        }
      }
    })
    const markers = coordArr.map(marker => {
      return <Marker key={marker.lat} lat={marker.lat} lng={marker.lng} data={marker}/>
    })
    const getMapOptions = (maps) => {

      return {
          streetViewControl: false,
          scaleControl: true,
          fullscreenControl: false,
          
          gestureHandling: "greedy",
          disableDoubleClickZoom: true,
          minZoom: 5,
          maxZoom: 25,
  
          mapTypeControl: true,
          mapTypeId: maps.MapTypeId.ROADMAP,
          mapTypeControlOptions: {
              style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: maps.ControlPosition.BOTTOM_CENTER,
              mapTypeIds: [
                  maps.MapTypeId.ROADMAP,
                  maps.MapTypeId.SATELLITE,
                  maps.MapTypeId.HYBRID
              ]
          },
  
          zoomControl: true,
          clickableIcons: false
      };
  }
    return (
      // Important! Always set the container height explicitly
      <div className="gmap-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD07ag1AmuNQDOUHrapJflpkMIOfQ3JzvA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={getMapOptions}
        >
          { markers }
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    infrastructure: state.infrastructure
  }
}
export default connect(mapStateToProps)(GoogleMap)


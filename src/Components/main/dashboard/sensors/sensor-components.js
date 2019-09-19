import React from 'react'

  // SENSOR AIR QUALITY
export const AirQuality = ({ airQuality }) => {
  return (
    <div className="airQuality__indicator">
      <i className={ airQuality === 'good' ? "icon-co2 status-good-c" : "icon-co2 status-alert-c"}></i>
    </div>
  )
}

  // SENSOR HEADING
export const Heading = ({ heading }) => {
    // Geting heading position 355° //  360°*100%/355° = 1.014  
  const mathPosition = () => heading *1.014
  let style = {
    transform: `rotate(${mathPosition()}deg)`
  }
  return (
    <div className="heading__indicator">
      <i className="icon-compas-arrow" style={ style }></i>
    </div>
  )
}

  // SENSOR BATTERY STATUS
export const Battery = ({ status }) => {
  return (
    <div className="battery__indicator">
      <span className={ Number(status) >= 0 ? "battery__line low" : "battery__line"}/>
      <span className={ Number(status) >= 20 ? "battery__line mid" : "battery__line"}/>
      <span className={ Number(status) >= 40 ? "battery__line mid" : "battery__line"}/>
      <span className={ Number(status) >= 60 ? "battery__line good" : "battery__line"}/>
      <span className={ Number(status) >= 80 ? "battery__line high" : "battery__line"}/>
      <i className="icon-battery"></i>
    </div>
  )
}

  // SENSOR SIGNAL
export const Signal = ({ signal }) => {   
  return (
    <div className="signal__indicator">
      <span className={ Number(signal) >= 0 ? "signal__line low" : "signal__line"}/>
      <span className={ Number(signal) >= 10 ? "signal__line mid" : "signal__line"}/>
      <span className={ Number(signal) >= 20 ? "signal__line mid" : "signal__line"}/>
      <span className={ Number(signal) >= 30 ? "signal__line mid" : "signal__line"}/>
      <span className={ Number(signal) >= 40 ? "signal__line good" : "signal__line"}/>
      <span className={ Number(signal) >= 50 ? "signal__line good" : "signal__line"}/>
      <span className={ Number(signal) >= 60 ? "signal__line good" : "signal__line"}/>
      <span className={ Number(signal) >= 70 ? "signal__line high" : "signal__line"}/>
      <span className={ Number(signal) >= 80 ? "signal__line high" : "signal__line"}/>
      <span className={ Number(signal) >= 90 ? "signal__line high" : "signal__line"}/>
    </div>
  )
}
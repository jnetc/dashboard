import React from 'react'
import { connect } from 'react-redux'
import { Indicators, TimePeriod, Firmware, SensorsScanned } from './sensor-data-fieldsets'
// import SensorDataHeader from './sensor-data-header'
import Graph from './charts'
import ProgressSteps from '../../../_progress-steps'

const sensorData = (props) => {
    // DESTRUCTION
    // console.log(props);
  const { history } = props 
  // Find sensor by ID 
  // const sensor = sensors.find(el => el.id === match.params.id)
  
  
  // UPDATE FIRMWARE
  const updateFirmware = (e) => {
    e.preventDefault()
  }
  // const {  batteryStatus, sensorSignal } = sensor
  
  return (
    <div id="sensor__area" className="item-motion page">
      <ProgressSteps history={ history } />
      {/* <SensorDataHeader 
       sensorName={ sensorName }
       sensorID={ props.match.params.id }
     /> */}
      <div id="sensor__area__data">
        <div className="sensor__area__graph">
          <article className="sensor__graph__item">
            <section className="sensor__graph__item__header">
              <div className="sensor__graph__item__header__icon">
                <i className="icon-geo"></i>
              </div>
              <div className="sensor__graph__item__header__name">
                Pressure
              </div>
              <div className="sensor__graph__item__header__value">
                7845.9 hPa
              </div>
            </section>
            <Graph/>
          </article>
          <article className="sensor__graph__item">
            <Graph/>
          </article>
          <article className="sensor__graph__item"></article>
          <article className="sensor__graph__item"></article>
        </div>
        <article className="sensor__area__params">
          <Indicators
            name={ 'Indicators' }
            // batteryStatus={ batteryStatus }
            // sensorSignal={ sensorSignal }

            />
          <TimePeriod
            name={ 'Time Period' }/>
          <Firmware
            name={ 'Firmware' }
            versio={ '222.5.55' }
            firmware={ updateFirmware }/>
          <SensorsScanned
             name={ 'Sensors scanned' }/>
        </article>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    sensors: state.sensors
  }
}
export default connect(mapStateToProps)(sensorData)
import React from 'react'
import { Battery, Signal } from './sensor-components'

  // INDICATOR FIELD
export const Indicators = (props) => (
  <fieldset>
    <legend>{ props.name }</legend>
    <div className="sensor__areas">
      <div className="col-pos">
        <span className="row__title">Battery status</span>
        <Battery status={ props.batteryStatus }/>
      </div>
      <div className="col-pos">
        <span className="row__title">Sensor signal</span>
        <Signal signal={ props.sensorSignal }/>
      </div>
    </div>
  </fieldset>
)

  // TIME PERIOD FIELD
export const TimePeriod = (props) => (
  <fieldset>
    <legend>{ props.name }</legend>
    <div className="sensor__areas">

    </div>
  </fieldset>
)
export const Firmware = (props) => (
  <fieldset>
    <legend>{ props.name }</legend>
    <div className="sensor__areas ">
      <div id="have_new_version">You have a new version</div>
      <div id="sensor__firmware__version">
        <span className="version">{ props.versio }</span>
        <form name="firmware_update" onSubmit={ props.firmware}>
          <button type="submit" className="btn btn-update">Update</button>
        </form>
      </div>
    </div>
  </fieldset>
)
export const SensorsScanned = (props) => (
  <fieldset>
    <legend>{ props.name }</legend>
    <div className="sensor__areas">

    </div>
  </fieldset>
)
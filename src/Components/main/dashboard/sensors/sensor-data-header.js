import React from 'react'
import { connect } from 'react-redux'
// import { updateSensorName } from '../../../../Actions/sensors'
import Button from '../../../reusable/button'


const SensorDataHeader = (props) => {
  // console.log(props);
  
  const { dispatch, sensorID } = props
  // const changeName = (e) => {
  //   return dispatch(updateSensorName(sensorID, e.target.value));
  // }

  return (
    <div id="sensor__area__header">
      <button onClick={ props.goBack } className="btn btn-primary">Back</button>
      <form name="change_name" id="area__header__name" onSubmit={ props.updateName }>
        <span id="area__header__namesensor">Sensor Name:</span>
        <span className="filter">
          <input 
            type="text"
            className="input"
            name="area__header__name__change"
            // onChange={ changeName  }
            value={ props.sensorName }
            />
          <label htmlFor="area__header__name__change" className="label"></label>
        </span>
        <Button typeValue='submit' classValue="btn btn-aqua" nameValue="Change name"/>
        <button type="submit" className="btn btn-aqua">Change name</button>
      </form>
      <span id="area__header__id">Sonsor ID: { sensorID }</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sensors: state.sensors
  }
}

export default connect(mapStateToProps)(SensorDataHeader)
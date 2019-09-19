import React from 'react'
import Sensor from './sensor'
import { connect } from 'react-redux'
import Search from '../../../_search'
// import { sensorsFilter } from '../../../../Actions/sensors'
import sensorsSelector from '../../../../Utils/sensorsSelector'
import ProgressSteps from '../../../_progress-steps'
import RangeSlider from '../../../_range-slider'


const Sensors = (props) => {
  // console.log(props);
  
  const { alert, primary } = props.infrastructure

  // Width for Search component
  const style = {
    width: '300px'
  }
  // primary.map(data => {
  //   console.log(data.type);
  //   return data.type
    
  // }).sort()
  // console.log(primary);
  
  
  return (
    <div className="page">
      <ProgressSteps
        history={ props.history }/>
      <div id="sensors__filter">
        <Search
          // action={ sensorsFilter } 
          placeholder={ 'Search sensors' } 
          name={ 'search__sensors' }
          styleWidth={ style }
          />
          <div className="range_sliders_block">
            <div id="temperature_range">
              <RangeSlider/>
              <span>Temperature</span>
            </div>
            <div id="humidity_range">
              <RangeSlider/>
              <span>Humidity</span>
            </div>
            <div id="airpressure_range">
              <RangeSlider/>
              <span>Air Pressure</span>
            </div>
            <div id="batterys_range">
              <RangeSlider/>
              <span>Battery status</span>
            </div>
            <div id="sensors_range">
              <RangeSlider/>
              <span>Signal status</span>
            </div>
          </div>
      </div>
      <section>
        { alert.length > 0 && 
          <fieldset id="alert__zone">
            <legend>ALERTS</legend>
            { alert
              .map(dang =>
               <Sensor 
                  key={ dang.id } 
                  id={ dang.id } 
                  data={ dang } />)
            }
          </fieldset>
        }
        <div id="fine__zone">
          { primary
            .map(sens =>
             <Sensor 
                key={ sens.id } 
                id={ sens.id }
                data={ sens } />)
          }
        </div>
      </section>
    </div>
  )
}

  // REDUX CONNECT
const mapStateToProps = (state) => {
  return {
    infrastructure: sensorsSelector(state.infrastructure, [], null),
    // gateways: sensorsSelector(state.gateways, null)
  }
}
export default connect(mapStateToProps)(Sensors)
import React from 'react'
import { Link } from 'react-router-dom'
  // Components
import { AirQuality, Heading, Battery, Signal } from './sensor-components'

const Sensor = (props) => {
  
  const { 
    id, 
    temperature,
    airPressure,
    airQuality,
    heading,
    humidity,
    elevation,
    eventTimestamp,
    batteryStatus,
    signalStatus,
    status,
    voc,
    type } = props.data
    // Styling sensors for notification
  const statuses = () => {
    switch (type) {
      case 'wear':
        switch (status) {
          case 'danger':
            return { title: 'Wear', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'no power':
            return { title: 'Wear', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'no signal':
            return { title: 'Wear', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'warning':
            return { title: 'Wear', icon: "icon-sensor warning", style: "db__item__sensor warning" }
          default:
            return { title: 'Wear', icon: "icon-sensor fine", style: "db__item__sensor" }
        }
      case 'wheel':
        switch (status) {
          case 'danger':
            return { title: 'Wheel', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'no power':
            return { title: 'Wheel', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'no signal':
            return { title: 'Wheel', icon: "icon-sensor danger", style: "db__item__sensor danger" }
          case 'warning':
            return { title: 'Wheel', icon: "icon-sensor warning", style: "db__item__sensor warning" }
          default:
            return { title: 'Wheel', icon: "icon-sensor fine", style: "db__item__sensor" }
        }
      case 'gateway':
        switch (status) {
          case 'danger':
            return { title: 'Gateway', icon: "icon-gateway danger", style: "db__item__sensor danger" }
          case 'no power':
            return { title: 'Gateway', icon: "icon-gateway danger", style: "db__item__sensor danger" }
          case 'no signal':
            return { title: 'Gateway', icon: "icon-gateway danger", style: "db__item__sensor danger" }
          case 'warning':
            return { title: 'Gateway', icon: "icon-gateway warning", style: "db__item__sensor warning" }
          default:
            return { title: 'Gateway', icon: "icon-gateway fine", style: "db__item__sensor" }
        }
      case 'tag':
        switch (status) {
          case 'danger':
            return { title: 'Tag', icon: "icon-tag danger", style: "db__item__sensor danger" }
          case 'no power':
            return { title: 'Tag', icon: "icon-tag danger", style: "db__item__sensor danger" }
          case 'no signal':
            return { title: 'Tag', icon: "icon-tag danger", style: "db__item__sensor danger" }
          case 'warning':
            return { title: 'Tag', icon: "icon-tag warning", style: "db__item__sensor warning" }
          default:
            return { title: 'Tag', icon: "icon-tag fine", style: "db__item__sensor" }
        }
      default:
        return;
    }
  }  
  const vocColor = (voc) => {
    if (voc >= 1000) {
      return "fcline ex-fcline voc danger";
    }
    if (voc >= 300) {
      return "fcline ex-fcline voc warning";
    } else {
      return "fcline ex-fcline voc fine";
    }
  }
 
  return (
    <div className="db__item__block" id={id} data-type={ statuses().title }>
      <Link to={`/sites/fb8b4f5c-960b-45f3-a993-38a550a2673d`} className="db__sens__geo">
        <i className="icon-geo"></i>
        <span className="sens__geo__pointer"></span>
        <i className="icon-geo-plan"></i>
      </Link>
      <Link to={`/dashboard/sensors/${id}`} className={ statuses().style }>
        <i className={ statuses().icon }></i>
        <div className="main_in_line col-pos">
          <div className="row__title">{`${ statuses().title } ID`}</div>
          <div className="fcline cut_name">{ id }</div>
          <span className="sensor__timestamp">Last update: { eventTimestamp ? eventTimestamp : `--` }</span>
        </div>
        <div className="other_in_line wl-s col-pos ailine">
          <div className="row__title">Temperature</div>
          <div className={ Math.sign(temperature) >= 0 ? "fcline ex-fcline status-alert-c" : "fcline ex-fcline status-cold-c"}>
            { temperature ? Math.floor(temperature) : `--` }°C
          </div>
        </div>
        <div className="other_in_line wl-m col-pos ailine">
          <div className="row__title">Humidity</div>
          <div className="fcline ex-fcline">{ humidity ? Math.floor(humidity) : `--` }%</div>
        </div>
        <div className="other_in_line wl-m col-pos">
          <div className="row__title">Air Pressure</div>
          <div className="fcline ex-fcline">{ airPressure ? Math.floor(airPressure) : `--` } kPa</div>
        </div>
        <div className="other_in_line wl-m col-pos">
          <div className="row__title">Elevation</div>
          <div className="fcline ex-fcline">{ elevation ? elevation : `--` } m</div>
        </div>
        <div className="other_in_line wl-m col-pos">
          <div className="row__title">Air Quality</div>
          <AirQuality airQuality={ airQuality } />
        </div>
        <div className="other_in_line wl-s col-pos">
          <div className="row__title">VOC</div>
          <div className={ vocColor(voc) }>{ voc ? voc : `--` }</div>
        </div>
        <div className="other_in_line wl-m col-pos">
          <div className="row__title">Heading
            <span className="ext__title">{ heading }°</span>
          </div>
          <Heading heading={ heading } />
        </div>
        <div className="other_in_line wl-m col-pos sens__battery">
          <div className="row__title">Battery status</div>
          <Battery status={ batteryStatus } />
        </div>
        <div className="other_in_line wl-m col-pos">
          <div className="row__title">Sensor signal</div>
          <Signal signal={ signalStatus } />
        </div>
        <i className="icon-arrow"></i>
      </Link>
    </div>
  )
}


export default Sensor
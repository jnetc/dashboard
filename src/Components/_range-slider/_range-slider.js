import React from 'react'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'

const RangeSlider = (props) => {
  return (
    <Slider className="slider_box" domain={[0, 100]} values={[10, 50]} step={1} mode={2}>
    <div className="slider_rail" />
    <Rail>
      {({ getRailProps }) => (  // adding the rail props sets up events on the rail
        <div className="slider_rail" {...getRailProps()} /> 
      )}
    </Rail>
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks right={false} left={false}>
      {({ tracks, getTrackProps }) => (
        <div className="slider-tracks">
          {tracks.map(({ id, source, target }) => (
            <Track
              key={id}
              source={source}
              target={target}
              getTrackProps={getTrackProps}
            />
          ))}
        </div>
      )}
    </Tracks>
  </Slider>
  )
}
export default RangeSlider

  // HANDLER OPTIONS
export const Handle = ({ handle: { id, value, percent }, getHandleProps }) => {
  return (
    <div 
      style={{ left: `${percent}%` }}
      className="slider_handle"
      {...getHandleProps(id)}
    >
      <div className="slider_handle_value">
        {value}
      </div>
    </div>
  )
}

  // TRACK OPTIONS
const Track = ({ source, target, getTrackProps }) => { // your own track component
  return (
    <div
      style={{ left: `${source.percent}%`, width: `${target.percent - source.percent}%` }}
      className="slider_track"
      {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
    />
  )
}
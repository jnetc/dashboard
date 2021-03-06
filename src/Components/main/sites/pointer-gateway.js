import React from 'react'

const Gateway = ({ pos }) => (
  <path
    className="none-selecteble" datapointer="pointers" transform={`translate(${pos.x},${pos.y}) scale(0.33)`}
    d="M5.3,16.8h53.5c2.8,0,5.1,2.3,5.1,5.1v20.2c0,2.8-2.3,5.1-5.1,5.1H5.3c-2.8,0-5.1-2.3-5.1-5.1V21.9
    C0.1,19.1,2.4,16.8,5.3,16.8z M16.5,48.4l3.5,3.2c1.4,1.4,3.4,2.2,5.4,2.2h13.1c2,0,3.9-0.8,5.4-2.2l3.5-3.2H16.5z M30.4,52
    c-0.7,0-1.2-0.5-1.3-1.1l0,0c0-0.7,0.6-1.3,1.3-1.3h3.3c0.7,0,1.3,0.6,1.3,1.3l0,0c-0.1,0.7-0.6,1.1-1.3,1.1H30.4z M16.5,15.6
    l3.5-3.2c1.4-1.4,3.4-2.2,5.4-2.2h13.1c2,0,3.9,0.7,5.4,2.2l3.5,3.2L16.5,15.6z M30.4,12c-0.7,0-1.2,0.4-1.3,1.1c0,0,0,0,0,0l0,0
    c0,0.7,0.6,1.3,1.3,1.3h3.3c0.7,0,1.3-0.6,1.3-1.3l0,0c0-0.7-0.6-1.2-1.2-1.1c0,0,0,0,0,0H30.4z"/>
)
export default Gateway
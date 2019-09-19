import React from 'react'
import { connect } from 'react-redux'

const RouteMapLine = ({ calcRoute }) => {

  const coordinates = []
  if (calcRoute !== undefined) {
    const arr = Array.from(calcRoute)
    for (let i = 0; i < arr.length; i++) {
      let startpoint = i + 0
      let endPoint = i + 2
      const createCoordinates = arr.slice(startpoint, endPoint)
      // console.log(`start ${startpoint}`, `end ${endPoint}`);
      // console.log(createCoordinates);
      if (createCoordinates.length === 2) {
        coordinates.push(createCoordinates)
      }
    }
  }

    // ROUTE LINE DRAW
  const createRoute = coordinates.map((pos, key, arr) => {
    if ( key === arr.length - 1 ) {
        // Values for centering position END POINT LINE
      const centerByX = pos[1].x + 10
      const centerByY = pos[1].y + 10
        // END POINT LINE
      return <line x1={ pos[0].x } y1={ pos[0].y }
                   x2={ centerByX } y2={ centerByY }
                   key={ key }
                   className="draw-lineroute"/>
    } else if ( key === 0) {
        // Values for centering position START POINT
        // Circle needs for hide pointer on the map
      const centerByX = pos[0].x + 10
      const centerByY = pos[0].y + 10
      const circleByX = pos[0].x // radius 16
      const circleByY = pos[0].y // radius 16
        // START POINT LINE
      return <g key={ key }>
              <rect x={ circleByX } y={ circleByY } 
                        id="end-position-bg"/>
              <line x1={ centerByX } y1={ centerByY }
                          x2={ pos[1].x } y2={ pos[1].y }
                          className="draw-lineroute"/>
            </g>
      
    } else {
      return <line x1={ pos[0].x } y1={ pos[0].y }
                   x2={ pos[1].x } y2={ pos[1].y }
                   key={ key }
                   className="draw-lineroute"/>
    }
  })

    // TURN CIRCLE DRAW / START POINT / END POINT
  const createTurns = coordinates.map((pos, key, arr) => {    
    if ( key === arr.length - 1 ) {
        // Values for centering position START POINT
        // sitemap pointers have width/height 20px or radius 10
      const circleByX = pos[1].x + 10
      const circleByY = pos[1].y + 10
      const arrowByX = pos[1].x + 3
      const arrowByY = pos[1].y + 1
        // START POINT
      return  <g key={ key }>
                  <circle cx={ circleByX } cy={ circleByY } r="14" id="start-position-point"/>
                  <path d="M7.4,12.482V0l7.4,14.805ZM7.4,0V12.482L0,14.805Z" 
                        transform={`translate(${ arrowByX } ${ arrowByY })`}
                        id="start-position-arrow" />
              </g>

      // return <circle cx={ circleByX } cy={ circleByY } key={ key }
      //                 r="12" id="start-position-point"/>
    } else if ( key === 0) {
        // Values for centering position END POINT
        // sitemap pointers have width/height 20px or radius 10
      const iconByX = pos[0].x - 9
      const iconByY = pos[0].y - 28
      const circByX = pos[0].x + 10 // radius 10
      const circByY = pos[0].y + 10 // radius 10
        // 1 circle, END POINT
        // 2 icon, END POINT
        // 3 circle, prev turnpoint
      return <g key={ key }>
      <defs>
        <filter id="shadow" width="200%" height="200%">
          <feDropShadow dx="7" dy="15" stdDeviation="6" floodColor="#015f2b" floodOpacity=".3" />
        </filter>
      </defs>
        <circle cx={ circByX } cy={ circByY } 
                r="10" id="end-position-point"/>
        <path d="M32,0A26.46,26.46,0,0,0,5.53,26.44C5.53,44.38,32,64,32,64S58.47,44.38,58.47,26.44A26.46,26.46,0,0,0,32,0Zm0,34.16A10.25,10.25,0,1,1,42.25,23.89,10.25,10.25,0,0,1,32,34.13Z"
              transform={`translate(${iconByX}, ${iconByY}) scale(.6)`} id="end-position-icon" filter="url(#shadow)"/>
        <circle cx={ pos[1].x } cy={ pos[1].y }
                r="8" className="draw-turnroute"/>
      </g>
    } else {
        // Middle turnpoints
      return <circle cx={ pos[1].x } cy={ pos[1].y } key={ key }
                    r="8" className="draw-turnroute"/>
    }
  })



  
  console.log(coordinates);
  
  return (
    <g>
      { createRoute }
      { createTurns }
      {/* <line x1="900" y1="600" x2="1300" y2="620" stroke="orange" fill="transparent" strokeWidth="5"/> */}
    </g>
  )
}
const mapStateToProps = (state) => {  
  return {
    calcRoute: state.calcRoute
  }
}
export default connect(mapStateToProps)(RouteMapLine)
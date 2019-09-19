export default (sensors, tags, filters) => {
  
    // Slice sensors array in one
  const arr = [...sensors, ...tags]

  
  // sensors.filter(sensor => {
  //   const filterSensorMatch = sensor.sensorName !== undefined ?
  //   sensor.sensorName.toLowerCase().includes(filters.sensorName.toLowerCase()) :
  //   sensor.sensorName = 'Wizense sensor'
    
  //   return filterSensorMatch
  // })

  // Recreate structure for better filtering data
  const expectedValues = sensorsValues(arr)
   // Create array zones
  const createZones = zones(expectedValues)
  
  return createZones
}

const sensorsValues = (arr) => {
    // Array for needed values
  const sensorValues = []
    // Separate values
  arr.forEach(sensor => {
    if (sensor.report !== undefined && sensor.deviceInfo !== undefined) {
      if (sensor.report.status !== undefined && sensor.deviceInfo.type !== undefined ) {
        sensorValues.push({
          id: sensor.id,
          type: sensor.deviceInfo.type,
          airPressure: sensor.report.airPressure,
          airQuality: sensor.report.airQuality,
          heading: sensor.report.heading,
          humidity: sensor.report.humidity,
          lastConnection: sensor.report.lastConnection,
          status: sensor.report.status,
          temperature: sensor.report.temperature,
          elevation: sensor.report.elevation,
          voc: sensor.report.voc,
        })
      }
    }
    return console.log(`Data is not corrent: ${sensor}`);
  })
  return sensorValues;
}

// Filtering all sensors by zones
// ALERT, PRIMARY ZONES
const zones = (sensors) => {
    // Zones
  const alert = []
  const primary = []
    // Filtering by value  
  sensors.filter(sensor => {
    switch (sensor.status) {
      case 'OK':
        return primary.push(sensor);
      default:
        return alert.push(sensor)
    }
  })
    // Return Object of arrays
  return {
    alert: alert,
    primary: primary
  }
}



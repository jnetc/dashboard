//   // FETCH API DATA

//   let sensors = [
//     { id: 'fb8b4f5c-960b-45f3-a993-38a550a2673d', temperature: '23', pressure: '7845.9', humidity: '61.4', batteryStatus: '30', sensorSignal: '55', status: "no power", posX: 750, posY: 450 },
//     { id: '1ae4f970-6d3a-44d1-bde4-5ad8eb147d12', temperature: '23.7', pressure: '3565.9', humidity: '56.7', batteryStatus: '98', sensorSignal: '78', status: "no signal", posX: 450, posY: 750 },
//     { id: 'cda5568c-2000-46bc-85af-0dbac152c97b', temperature: '23.8', pressure: '12245.9', humidity: '78.0', batteryStatus: '12', sensorSignal: '89', status: "ok", posX: 350, posY: 200 },
//     { id: "87993301-1ee3-4371-9c4e-4b16cc76367b", temperature: '17.2', pressure: '14545.9', humidity: '53.4', batteryStatus: '55', sensorSignal: '75', status: "no power", posX: 1000, posY: 890 },
//     { id: "12873e8e-5f47-417b-acd6-8c08a2421914", temperature: '24.3', pressure: '6785.9', humidity: '51.5', batteryStatus: '100', sensorSignal: '100', status: "danger", posX: 1150, posY: 460 },
//     { id: "f1e9d86e-039d-4cbb-8980-eb64d2be705d", temperature: '30.7', pressure: '6545.9', humidity: '60.1', batteryStatus: '68', sensorSignal: '63', status: "update", posX: 1280, posY: 560 },
//     { id: "a71981d1-1240-4976-8f9b-834d668bd57b", temperature: '12.5', pressure: '3457.9', humidity: '76.2', batteryStatus: '70', sensorSignal: '71', status: "ok", posX: 1000, posY: 945 },
//     { id: "73e9a13b-a3ab-4ffa-8a2b-8112d09ea62c", temperature: '19.9', pressure: '11457.9', humidity: '55.9', batteryStatus: '100', sensorSignal: '51', status: "update", posX: 890, posY: 583 },
//     { id: "c0fdd14f-fb86-44b3-b078-8a8e0d8cd9e2", temperature: '21.1', pressure: '9545.9', humidity: '45.8', batteryStatus: '10', sensorSignal: '48', status: "ok", posX: 1500, posY: 510 },
//     { id: "79f67181-6afa-42d3-a793-6d28a59a8882", temperature: '22.8', pressure: '3576.9', humidity: '41.0', batteryStatus: '45', sensorSignal: '73', status: "update", posX: 140, posY: 950 },
//     { id: "f20584e5-ab5d-401f-aab6-f49333b23669", temperature: '27.8', pressure: '8545.9', humidity: '49.0', batteryStatus: '35', sensorSignal: '2', status: "ok", posX: 750, posY: 800 },
//   ]


//   //////////////////////
//   // DATA SENSOR REDUCER
// export const dataSensors = (state = [], action) => {
//   // console.log(action);
  
//   switch (action.type) {
//     case 'GET_SENSORS':
//       return action.sensors
//     case 'SENSOR_CHANGE_NAME':
//       return state.map(el => {
//         if (el.id === action.id) {
//           return {
//             ...el,
//             sensorName: action.sensorName
//           }  
//         } else {
//           return el
//         }  
//       })
//     default:
//       return state;
//   }
// }

//   ////////////////////////
//   // FILTER SENSOR REDUCER
// const defaultValues = {
//   sensorName: '',
//   temperature: 0,
//   humidity:0,
//   pressure: 0,
//   baterry: 0,
//   signal: 0
// }
// export const filterSensors = (state = defaultValues, action) => { 
//   switch (action.type) {
//     case 'SET_SENSORS_FILTER':
//       return {
//         ...state,
//         sensorName: action.sensorName
//       }
//     default:
//       return state;
//   }
// }

// // DUMMY DATA SITE & SENSOR
// export const sensorOnMap = (state = sensors, action) => {
//   return state
// }
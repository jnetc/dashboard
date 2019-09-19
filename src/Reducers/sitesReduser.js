  // FETCH API DATA
let getSitesArray = {
  sites: [
    { id: 'fb8b4f5c-960b-45f3-a993-38a550a2673d', buildingName: 'Metropolia', address: "Mannerheimintie 175 D 45", floorAndWing: '1 B', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher'], mashine: ['Drill mashine', 'Bobcat', 'Bobcat', 'Excavators', 'Loader'], numOfPeople: 2, numOfMashine: 2, alerts: 5 },
    { id: 'aedf7f4d-bfa9-4d40-9f89-2a33c66d88f4', buildingName: 'Metropolia', address: "Mannerheimintie 175 D 45", floorAndWing: '2 C', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber'], mashine: [], numOfPeople: 15, alerts: 2 },
    { id: '90a57e20-73b6-4334-905a-7fe33078f87a', buildingName: 'Eduskunta', address: "Mannerheimintie 175 D 45", floorAndWing: '-1 A', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher'], mashine: ['Loader'], numOfPeople: 3, alerts: 0 },
    { id: '1ae4f970-6d3a-44d1-bde4-5ad8eb147d12', buildingName: 'Skanska office', address: "Mannerheimintie 175 D 45", floorAndWing: '5 B', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: ['Bobcat', 'Bobcat'], numOfPeople: 7, alerts: 0 },
    { id: 'cda5568c-2000-46bc-85af-0dbac152c97b', buildingName: 'CityMarket Myyrmaki varasto', address: "Mannerheimintie 175 D 45", floorAndWing: '2 B', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: [], numOfPeople: 11, alerts: 1 },
    { id: "87993301-1ee3-4371-9c4e-4b16cc76367b", buildingName: 'Vantaan vangila', address: "Mannerheimintie 175 D 45", floorAndWing: '2 D', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: [], numOfPeople: 15, alerts: 23 },
    { id: "619cffda-9ce7-46ae-bc14-d2c5651fcb2f", buildingName: 'YIT project №24864', address: "Mannerheimintie 175 D 45", floorAndWing: '2 B', people: ['Cleaner', 'Cleaner', 'Plumber', 'Worker', 'Mason', 'Mason', 'Mason'], mashine: ['Drill mashine', 'Bobcat', 'Bobcat', 'Excavators', 'Loader'], numOfPeople: 7, alerts: 0 },
    { id: "12873e8e-5f47-417b-acd6-8c08a2421914", buildingName: 'YIT project №24864', address: "Mannerheimintie 175 D 45", floorAndWing: '2 С', people: ['Cleaner', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: ['Drill mashine', 'Bobcat', 'Bobcat', 'Excavators', 'Excavators', 'Loader', 'Loader'], numOfPeople: 2, alerts: 0 },
    { id: "2aef2f2e-3751-4676-96e7-9797bfaccfc1", buildingName: 'YIT project №24864', address: "Mannerheimintie 175 D 45", floorAndWing: '3 Ф', people: ['Cleaner', 'Plumber', 'Plumber', 'Plumber', 'Plumber'], mashine: ['Drill mashine', 'Bobcat', 'Bobcat', 'Bobcat', 'Excavators', 'Loader'], numOfPeople: 1, alerts: 0 },
    { id: "cfce6a10-d105-4360-b08e-224d71ded09a", buildingName: 'Craamo varasto №456', address: "Mannerheimintie 175 D 45", floorAndWing: '1 F', people: ['Cleaner', 'Worker', 'Guard', 'Worker', 'Mason'], mashine: ['Drill mashine', 'Bobcat', 'Bobcat', 'Excavators', 'Loader'], numOfPeople: 5, alerts: 1 },
    { id: "f1e9d86e-039d-4cbb-8980-eb64d2be705d", buildingName: 'ExitLigths Airport Vanta', address: "Mannerheimintie 175 D 45", floorAndWing: '1 C', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: [], numOfPeople: 12, alerts: 2 },
    { id: "a71981d1-1240-4976-8f9b-834d668bd57b", buildingName: 'ExitLigths Stokmann Helsinki', address: "Mannerheimintie 175 D 45", floorAndWing: '5 C', people: ['Cleaner', 'Student', 'Worker', 'Guard', 'Teacher', 'Plumber', 'Plumber', 'Worker', 'Mason'], mashine: [], numOfPeople: 2, alerts: 0 }
  ]
}

let getSitesPointers = {
  pointers: [
    { id: 'dsadadiuwer', x: 205, y: 213, name: 'Ivan Petrov', status: 'Good', alerts: 0 },
    { id: 'd5adad42wer', x: 493, y: 175, name: 'Juha Suomalainen', status: 'Good', alerts: 1 },
    { id: 'dsa4574fuwer', x: 415, y: 970, name: 'Banji Kengur', status: 'Bad', alerts: 4 },
    { id: 'd8awe6o29er', x: 246, y: 1290, name: 'Xiao Zinpi', status: 'Good', alerts: 0 },
    { id: '53l5kdiuwer', x: 590, y: 795, name: 'Julia Kansoki', status: 'Good', alerts: 0 },
    { id: 'dsa345kd84h', x: 135, y: 440, name: 'Flora Foling', status: 'Good', alerts: 1 },
    { id: 'd24ds48uwer', x: 374, y: 312, name: 'Justic Hericson', status: 'Good', alerts: 0 }
  ]
}

  //////////////////////
  // DATA SITES REDUCER
  export const dataSites = (state = getSitesArray, action) => {
    // console.log(state);
    
    switch (action.type) {
    
      // case 'GET_SENSORS':
      //   return action.sensors
      // case 'SENSOR_CHANGE_NAME':
      //   return state.map(el => {
      //     if (el.id === action.id) {
      //       return {
      //         ...el,
      //         sensorName: action.sensorName
      //       }  
      //     } else {
      //       return el
      //     }  
      //   })
      default:
        return state;
    }
  }
  //////////////////////
  // DATA SITES POINTER REDUCER
  export const dataSitesPointer = (state = getSitesPointers, action) => {    
    switch (action.type) {
      default:
        return state;
    }
  }
  
    ////////////////////////
    // FILTER SITES REDUCER
  const defaultValues = {
    sensorName: '',
    temperature: 0,
    humidity:0,
    pressure: 0,
    baterry: 0,
    signal: 0
  }
  export const filterSites = (state = defaultValues, action) => { 
    switch (action.type) {
      case 'SET_SENSORS_FILTER':
        return {
          ...state,
          sensorName: action.sensorName
        }
      default:
        return state;
    }
  }
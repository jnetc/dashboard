import database from '../Database/firebase'
  // Palash function for firebase
import processSensorDataFromReport from '../Utils/firebase-restructure-data'

  // GET SITES

  // GET MAP
export const getMap = (sensors) => ({
  type: 'GET_SENSORS',
  sensors
})

export const actionGetMap = () => {
  let tenantId = "tenant-8f1cc381-a35e-454e-bcc3-bde6dedf878f";
  let userNamePath = "tenants/" + tenantId + "/report";
  return (dispatch) => {
    return database
      .ref(userNamePath)
      .on('value', (snapshot) => {
        console.log(snapshot);
        let arr = []
        snapshot.forEach(sensor => {
          arr.push({
            id: sensor.key,
            ...sensor.val()
          })
        })
        const newArr = processSensorDataFromReport(arr)
        dispatch(getMap(newArr))
      })
  }
}

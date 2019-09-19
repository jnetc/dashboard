const createZoneByNotification = ( state, filter ) => {
    // Filter all SITES by ALERT, PRIMARY ZONES
  let alert = []
  let primary = []
  
  state.sites.filter(el => {
    if (el.alerts > 0) {
      return alert.push(el)
    } 
    return primary.push(el)
  })
    // Put created arr to new arr & return it
  let newStateArr = {
    alert,
    primary
  }
  return newStateArr
}
export default createZoneByNotification
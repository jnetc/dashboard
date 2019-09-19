  // Show Action Panel then presed on thme map pointer
export const sitemapActionPanel = (Boolean, id) => ({
  type: 'SITEMAP_ACTION_PANEL',
  show: Boolean,
  id
})
  // Get calculated route into Redux
export const getRouteCoordinates = (route) => ({
  type: 'SITEMAP_CALCULATE_ROUTE',
  route
})
  // Sending coordinates "FROM" => "TO" for calculate route
export const sendCalculatedRoute = (route) => {
  return (dispatch) => {
    return fetch('https://wizense-web.appspot.com/webservice/indoorNav', {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(route),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(calcRoute => {
        // Dispatch calculated route into Redux
      dispatch(getRouteCoordinates(calcRoute))
    })
  }
}

  // Progress steps data by ID
// export const getDataFromSite = (id) => ({
//   type: 'DATA_FROM_SITE',
//   id
// })

  // TOOLTIP ACTION // 
export const tooltipPointerData = (data) => ({
  type: 'TOOLTIP_DATA',
  data
})
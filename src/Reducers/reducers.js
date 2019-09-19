export const sitemapActionPanel = (state = {show: false, id: ''}, action) => {
  const { show, id } = action
  return action.type === 'SITEMAP_ACTION_PANEL' ? {show, id} : state
}
export const coordinatesForCalculateRoute = (state = {}, action) => {
  return action.type === 'SITEMAP_CALCULATE_ROUTE' ? action.route : state
}
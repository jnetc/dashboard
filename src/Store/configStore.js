import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getInfrastructureFromFirebase, getTagsFromFirebase,
  getToolsFromFirebase, getTrucksFromFirebase, getMachinesFromFirebase } from '../Reducers/reduser'
import { sitemapActionPanel, coordinatesForCalculateRoute } from '../Reducers/reducers'
import { dataSites, dataSitesPointer } from '../Reducers/sitesReduser'

const composeDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // STORE CREATION
export default createStore(
  combineReducers({
    infrastructure: getInfrastructureFromFirebase,
    machines: getMachinesFromFirebase,
    tags: getTagsFromFirebase,
    tools: getToolsFromFirebase,
    trucks: getTrucksFromFirebase,
    actionPanel: sitemapActionPanel,
    calcRoute: coordinatesForCalculateRoute,
    sites: dataSites,
    pointers: dataSitesPointer,
  }),
  composeDevtool(applyMiddleware(thunk))
)
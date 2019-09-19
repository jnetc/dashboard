  // Gateways Action
// export const getGatewaysFromFirebase = (state = [], action) => {
//   switch (action.type) {
//     case 'FETCH_GATEWAYS':
//       return action.gateway
//     default:
//       return state
//   }
// }
  // Infrastructure Action
export const getInfrastructureFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INFRASTRUCTURE':
      return action.infrastructure
    default:
      return state
  }
}
// Mashines Action
export const getMachinesFromFirebase = (state = [], action) => {  
  switch (action.type) {
    case 'FETCH_MACHINES':
     return action.machines
    default:
      return state
  }
}
// Tags Action
export const getTagsFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TAGS':
     return action.tags
     default:
      return state
  }
}
// Tools Action
export const getToolsFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOOLS':
     return action.tools
     default:
      return state
  }
}
// Trucks Action
export const getTrucksFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TRUCKS':
     return action.trucks
     default:
      return state
  }
}
// Users Action
export const getUsersFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
     return action.users
     default:
      return state
  }
}







  // Sitemaps Action
export const getSitemapsFromFirebase = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SITEMAPS':
     return action.sitemaps
    default:
      return state
  }
}


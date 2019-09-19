import database from '../Database/firebase'

export const getInfrastructure = (infrastructure) => ({
  type: 'FETCH_INFRASTRUCTURE',
  infrastructure
})
export const getMachines = (machines) => ({
  type: 'FETCH_MACHINES',
  machines
})
export const getTags = (tags) => ({
  type: 'FETCH_TAGS',
  tags
})
export const getTools = (tools) => ({
  type: 'FETCH_TOOLS',
  tools
})
export const getTrucks = (trucks) => ({
  type: 'FETCH_TRUCKS',
  trucks
})

export const getSitemaps = (sitemaps) => ({
  type: 'FETCH_SITEMAPS',
  sitemaps
})

export const firebaseConnection = () => {
  const tenantId = "tenant-8f1cc381-a35e-454e-bcc3-bde6dedf878f";
  // let userNamePath = "tenants/" + tenantId + "/";
  let assetPath = `tenants/${tenantId}/assets/`
  // let sitemapsPath  = `tenants/${tenantId}/sitemaps`
  // let users  = `tenants/${tenantId}/users`



  return (dispatch) => {
      // FROM /ASSETS/ FIREBASE
      // FUNCTION FOR TRANSFORM OBJECT DATA TO ARRAY 
    const transform = (arrNotTransformed, arrName) => {
      const transformedArr = []
      const middleWareArr = []
      arrNotTransformed.forEach(middle => {          
        middleWareArr.push({
         id: middle.key,
         ...middle.val()
        })
      })
        // Filtering by array name / get name from firebase / assets
      const filteredArr = middleWareArr.filter(el => el.id === arrName)
        // Transform data & Delete empty ID
      for (const keys in filteredArr) {
        delete filteredArr[keys].id
        const arrWthioutId = filteredArr[keys]
          // Transform data & Push clear object to array
          for (const key in arrWthioutId) {
            transformedArr.push({
              id: key,
              ...arrWthioutId[key]
          })
        }
      }
      return transformedArr
    }

      // CONNECTIONS TO FIREBASE
      // INFRASTRUCTURE connection
    database
      .ref(assetPath)
      .on('value', (infra) => {
          // Get data from ASSETS for INFRASTRUCTURE
        const arrInfra = transform(infra, 'infrastructure')
          // Check
        if (arrInfra.length > 0) {          
          dispatch(getInfrastructure(arrInfra))
        }
      })
    
      // MACHINES connection
    database
      .ref(assetPath)
      .on('value', (machine) => {
          // Get data from ASSETS for MACHINES
        const arrMachines = transform(machine, 'machines')        
        if (arrMachines.length > 0) { 
          dispatch(getMachines(arrMachines))
        }
      })
     // TAGS connection
    database
     .ref(assetPath)
     .on('value', (tag) => {
         // Get data from ASSETS for TAGS
       const arrTags = transform(tag, 'tags')        
       if (arrTags.length > 0) { 
         dispatch(getTags(arrTags))
       }
     })       
      // TOOLS connection
    database
      .ref(assetPath)
      .on('value', (tool) => {
          // Get data from ASSETS for TOOLS
        const arrTools = transform(tool, 'tools')        
        if (arrTools.length > 0) { 
          dispatch(getTools(arrTools))
        }
      })    
      // TRUCKS connection
    database
      .ref(assetPath)
      .on('value', (truck) => {
          // Get data from ASSETS for TRUCKS
        const arrTrucks = transform(truck, 'trucks')        
        if (arrTrucks.length > 0) { 
          dispatch(getTrucks(arrTrucks))
        }
      })
  }
}
import React from 'react'
import { connect } from 'react-redux'
import Site from './site'
import ProgressSteps from '../../_progress-steps'
import createZoneByNotification from '../../../Utils/createZoneByNotification'
import Search from '../../_search'

const Sites = (props) => {

  const { sites, history } = props
    // Style for Search component
  
  const style = {
    width: '300px'
  }
  return (
    <div className="page">
      <ProgressSteps history={ history }/>
      <div id="sensors__filter">
        <Search 
          // action={ sensorsFilter } 
          placeholder={ 'Search building' } 
          name={ 'search__sensors' }
          styleWidth={ style }
          />
      </div>
      <div>
        { sites.alert.length > 0 && 
          <fieldset id="alert__zone">
            <legend>ALERTS</legend>
            { sites.alert.map(dang => <Site key={ dang.id } data={ dang }/>) }
          </fieldset>
        }
        <div id="fine__zone">
          { sites.primary.map(site => <Site key={ site.id } data={ site }/>) }
        </div>
      </div>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  
  return {
    sites: createZoneByNotification(state.sites, null)
  }
}

export default connect(mapStateToProps)(Sites)
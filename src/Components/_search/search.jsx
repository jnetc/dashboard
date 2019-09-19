import React from 'react'
import { connect } from 'react-redux'

// labelText for check input and add class when has a value
// dispatch(props.action()) comes from parent comp.
// style give individual width & comes from parent comp.
// name give individual name & comes from parent comp.
const Search = (props) => {

  const { name, styleWidth, placeholder } = props
  // dispatch, action - props values
  let getValue = (e) => {
    console.log(e.target.lavue);
    
    // dispatch(action(e.target.value))
  }
  return (
    <span className="filter">
      <input 
        type="text"
        className="input"
        name={ name }
        style={ styleWidth }
        onChange={ getValue } 
        placeholder={ placeholder }
        />
      <label htmlFor={ name } className="label"></label>
    </span>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filterSensors
  }
}

export default connect(mapStateToProps)(Search)
import React from 'react'

  // PROGRESS STEPS
const ProgressSteps = (props) => {
  // console.log(props);
  
  const { history, stepSitemapName } = props
    // Create array from history.location.path string
  const steps = history.location.pathname.split('/');
    // Remove first empty value
  steps.shift()  
    // Generate backward buttons
  const progress = steps.map(btn => {
    return <Button key={btn} name={btn} steps={ steps } history={ history } sites={ stepSitemapName } />   
  }) 
  
  return (
    <div className="progress__steps">
      { progress }
    </div>
  )
}

  // BUTTON STEP BACK
const Button = (props) => { 
  const { steps, name, history } = props
    // Length steps
  const step = steps.length
    // Find index
  const backIndex = steps.findIndex(index => index === props.name)
  // console.log(name, sites);
  
    // goBack logic with history
  const goBack = () => {
    switch (step) {
      case 2:
        if (backIndex === 0) {
          return history.goBack();
        }
        return null
      case 3:
        if (backIndex === 0) {
          return history.push(`/${props.name}`);
        }
        if (backIndex === 1) {
          return history.goBack();
        }
        return null
      default:
        return null
    }
  }
    // Remove last arrow if steps more 1
  const removeLastArrow = step - 1
    // Steps have first UpperCase letter
  const firstLetterUppercase = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div className="progress__wrapper">
      <button className="progress__btn" onClick={ goBack }>
        { firstLetterUppercase }
      </button>
      <i className={ step !== 1 && step > removeLastArrow ? "icon-arrow" : "" }></i>
    </div>
  )
}

export default ProgressSteps
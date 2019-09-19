import React from 'react'

const Button = (props) => {
  console.log(props);
  const { typeValue, classValue, nameValue } = props
  return (
    <div className="button__style">
      <button 
        type={ typeValue !== undefined && typeValue }
        className={ classValue }>
        { nameValue }
        <span className="button__backside"></span>
      </button>
    </div>
  )
}

export default Button
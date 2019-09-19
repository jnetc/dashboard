import React from 'react'
class Options extends React.Component {

  state = {
    className: 'header__options__wrapper'
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(() => ({
        className: 'header__options__wrapper show'
      }))
    }, 0);
  }
  
  render() {
    const {  namesOption } = this.props
    const option = namesOption.map(el => {
      return <Option 
        key={ el.id }
        names={ el }
      />
    })
    
    return  (
      <ul className={ this.state.className }>
        <div className="header__options__body">
          { option }
        </div>
      </ul>
    )
  }
}

class Option extends React.Component {
  linkOption = () => {
    console.log('click');
  }
  // Checking which block is use
  render() {
    const { names } = this.props
    return (
      <li 
        className="header__options__user"
        onClick={ this.linkOption }
      >
        { names.optionName }
      </li>
    )
  }
}

export default Options;
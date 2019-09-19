import React from 'react'
import ava from './img/tanvi.jpg'
import Options from './options'

export default class Login extends React.Component {

  state = {
    username: 'Administrator',
    showOptions: false,
    namesOption: [
      { id: 46578, optionName: 'Set status'},
      { id: 46589, optionName: 'Profile'},
      { id: 46557, optionName: 'Settings'},
      { id: 46523, optionName: 'Sign out'}
    ]
  }
  
    // Show popup list & set some event
  optionShow = () => {
    if (!this.state.showOptions) {
      document.addEventListener('mousedown', this.outsideClick)
    } else {
      document.removeEventListener('mousedown', this.outsideClick)
    }
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions
    }))
  }
    // Outside click event
  outsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.optionShow()
  }

  render() {
    const { username } = this.state   
    return (
      <div className="header__login__body">
        <span 
          className="header__login__name">
          { username }
        </span>
        <img 
          className="header__login__avatar" 
          src={ ava } 
          draggable="false" 
          alt={ username }
          onClick={ this.optionShow }
          ref={node => { this.node = node }}
         /> 
        { this.state.showOptions && 
        <Options 
          namesOption={ this.state.namesOption }
        />}  
      </div>
    )
  }
}


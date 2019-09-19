import React from 'react'

class Messages extends React.Component {
 
  state = {
    className: 'header__messages__wrapper'
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState(() => ({
        className: 'header__messages__wrapper show'
      }))
    })
  }
  render() {
    const {  namesOption } = this.props
    const option = namesOption.map(el => {
      return <Message
        key={ el.id }
        names={ el }
      />
    })

    return  (
      <ul className={ this.state.className }>
        <div className="header__messages__body">
          { option }
        </div>
      </ul>
    )
  }
}
class Message extends React.Component {
  linkOption = () => {
    console.log('click');
  }
  // Checking which block is use
  render() {
    const { names } = this.props
    return (
      <li 
        className="header__messages__notify"
        onClick={ this.linkOption }
      >
        <div className="header__messages_title">
          <h4>{ names.title }</h4>
          <span>{ names.time }</span>
        </div>
        <p>{ names.message }</p>
      </li>
    )
  }
}

export default Messages;
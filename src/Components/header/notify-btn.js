import React from 'react'
import Messages from './messages'

class NotifyBtn extends React.Component {

    state = {
      notifyShow: false,
      chatShow: false
    }

    // Show popup list & set some event
  notifyShow = () => {
    if (!this.state.notifyShow) {
      document.addEventListener('mousedown', this.outsideClick)
    } else {
      document.removeEventListener('mousedown', this.outsideClick)
    }
    this.setState((prevState) => ({
      notifyShow: !prevState.notifyShow
    }))
  }
    // Outside click event
  outsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.notifyShow()
  }
  render() {
    const { btn } = this.props    
    return (
      <div 
        className={ btn.notify !== undefined || btn.chat !== undefined ? "notify__btn notify" : "notify__btn" }
        onClick={ btn.notify !== undefined ? this.notifyShow : null }
        ref={node => { this.node = node }}
      >
        <i className={ btn.btnicon }></i>
        { this.state.notifyShow &&
          <Messages 
            showMessages={ this.state.notifyShow }
            namesOption={ btn.notify }
          /> 
        }
        { btn.notify !== undefined &&
          <div className="incomings__events__header">{ btn.notify.length }</div> }
      </div>
    )
  }
}
export default NotifyBtn
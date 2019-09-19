import React from 'react'
import NotifyBtn from './notify-btn'

class Notify extends React.Component {
 state = {
  buttons: [
    { id: 185697, btnicon: 'icon-exc-mark'},
    { id: 196695, btnicon: 'icon-alarm', notify: [
      {id: 678957, title: 'System error', time: '11:01', message: 'In basement men is need help'},
      {id: 568794, title: 'System error', time: '11:05', message: 'In second floor fire alarm'},
      {id: 687459, title: 'System error', time: '11:07', message: 'Help for plumber in kitchen'}]},
    { id: 178694, btnicon: ' icon-messages', notify: [
      {id: 135748, title: 'Andrew Smith', time: '15:14', message: 'You have a new message'},
      {id: 315798, title: 'Jonny Winchester', time: '17:10', message: 'You have a second new message and more other messages from administrator'}]},
    { id: 687814, btnicon: 'icon-exc-mark', chat: []},
  ]
 }
  render() {
    const buttons = this.state.buttons.map(btn => {
      return <NotifyBtn 
        key={ btn.id } 
        btn={ btn } 
      />
    })
    return (
      <div className="notify__box">
        { buttons }
      </div>
    )
  }
}

export default Notify
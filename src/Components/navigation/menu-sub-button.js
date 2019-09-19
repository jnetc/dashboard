import React from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuSubButton extends React.Component {

  render() {
      // Destruction Props
    const { mainName, button } = this.props    
    return (
      <NavLink
        to={ `/${mainName.toLowerCase()}/${button.name.toLowerCase()}` }
        className="button__sub" 
        activeClassName="sub_selected">
          <div className="sub__ring">
            <div className="dot"></div>
          </div>
          { button.name }
          { button.incoming !== undefined ? 
          <div className="incomings__events">{ button.incoming }</div> : null }
      </NavLink>
     )
  }
}

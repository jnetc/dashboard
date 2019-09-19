import React from 'react'
import MenuSubButton from './menu-sub-button'
import { NavLink } from 'react-router-dom'

export default class MenuButton extends React.Component {

  render() {
      // Destruction Props
    const { button } = this.props     

      // Check of submenu in array
    let subMenu
    if (button.submenu) {
      subMenu = button.submenu.map(el => {
        return <MenuSubButton key={ el.id } 
                              button={ el } 
                              mainName={ button.submenu !== undefined && button.name } />
      })
    }
      // Render main buttons in menu
    return (
      <div >
        <NavLink
          to={ `/${button.name.toLowerCase()}` }
          className="button__box" 
          activeClassName="selected" >
          <div className="button__main">
            <i className={`${ button.iconname } icon__main`}></i>
            <span className="nav_bt_nm">{ button.name }</span>
            { button.total !== undefined && 
              <div className="incomings__events">{ button.total }</div>}
            { button.submenu !== undefined && <i className="icon-arrow"></i>}
          </div>
        </NavLink>
        { button.submenu !== undefined &&
          <div className="sub__menu"> { subMenu }</div> 
        }
      </div>
     )
    }
}


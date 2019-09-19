import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './menu-button'
import './menu-background'
import NavBackground from './menu-background';

export default class Navigation extends React.Component {

  state = {
    menu: [
      { id: 'ac5456c3', name: 'Dashboard', iconname: 'icon-dashboard',
      submenu: [
        { id: 'uy54756c4', name: 'Sensors' }] },
      { id: 'gc3472v8', name: 'Sites', iconname: 'icon-sites' },
      { id: 'de0476s0', name: 'Resources', iconname: 'icon-resources',
        submenu: [
          { id: 'lk1023f8', name: 'People' },
          { id: 'ps9476v4', name: 'Machines' },
          { id: 'ps9re98w', name: 'Assets' }] 
      },
      { id: 'dw2648r2', name: 'Projects', iconname: 'icon-projects',
        submenu: [
          { id: 'sp2490d7', name: 'Tasks' }]
      },
      { id: 'op9567r4', name: 'Messages', iconname: 'icon-messages', total: 0,
        submenu: [
          { id: 'vj1230s7', name: 'Inbox', incoming: 15},
          { id: 'rw9042a9', name: 'Alerts', incoming: 322 },
          { id: 'ad4245s0', name: 'Notification', incoming: 5 }]
      },
      { id: 'wr3423a7', name: 'Reports', iconname: 'icon-reports',  total: 0,
        submenu: [
          { id: 'fs4209w8', name: 'Project', incoming: 2 },
          { id: 'ad2493a6', name: 'Site', incoming: 7 },
          { id: 'we8167s9', name: 'People', incoming: 45 }]
      }
    ]
  }

    // Finding & computed total incoming events
  msgTotal = () => {
    const findTotal = this.state.menu.filter(el => {
      return el.total !== undefined
    })
    findTotal.map(el => {
      const getIncoming = el.submenu.map(sub => {
        return sub.incoming
      })
      const sumOfSub = getIncoming.reduce((sum, num) => {
        return sum + num
      })
      el.total = sumOfSub
      return el
    })
  }

  componentDidMount() {
    // console.log('component mount');
    this.setState(() => ({
      total: this.msgTotal()
    }))
  }

  componentDidUpdate(prevState) {
    // console.log('component update');

  }

  render() {
      // Destruction Props
    const { incomingMsg } = this.props      
      // Create new buttons array 
    const menuButtons = this.state.menu.map(el => {    
      return <MenuButton key={ el.id } 
                         button={ el }
                         incomingMsg={ incomingMsg } />
    })
      // Get body theme classname
    const themeClass = document.querySelector('body').className    
      // Check theme & logo  
    const switchLogoTheme = (logo) => {
      switch (logo) {
        case 'cramo_theme':
          return 'cramo.svg'
        case 'exitlight_theme':
          return 'exitlight.svg'
        case 'emexlight_theme':
          return 'emexlight.svg'
        default:
          return 'fieldsight.png'
      }
    }
      // Logo path
    const logoSrc = `${ process.env.PUBLIC_URL }/img/logos/${ switchLogoTheme(themeClass) }`
      // Render Logo, Buttons list, background
    return (
      <nav>
        <figure>
          <Link to="/">
            <img src={ logoSrc } draggable="false" alt="logo"/>
          </Link>
        </figure>
        <div className="menu__box">
          { menuButtons }
        </div>
        <NavBackground/>
      </nav>
    )
  }
}

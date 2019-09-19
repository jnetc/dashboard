import React from 'react'
import Login from './header-login'
import Notify from './header-notify'

const Header = () =>  {
  return (
    <header>
      <Notify />
      <Login />
    </header>
  )
}
export default Header
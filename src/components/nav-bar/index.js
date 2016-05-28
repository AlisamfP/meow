import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Fixed } from 'react-layout-pane'
import Button from '../button'

import './index.css'

const NavBar = ({ onLogout }) => {
  return (
    <Fixed className="NavBar">
      <nav className="NavBar-nav">
        <Button
          kind="no-style"
          onClick={onLogout}
          className="NavBar-action">
          Logout
        </Button>
      </nav>
    </Fixed>
  )
}

NavBar.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default NavBar

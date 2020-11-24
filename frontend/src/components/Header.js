import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className='container'>
        <Link to='/'>
          <h3>Issue Tracker</h3>
        </Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    </header>
  )
}

export default Header

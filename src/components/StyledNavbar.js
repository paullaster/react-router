import React from 'react'
import { NavLink } from 'react-router-dom'

function StyledNavbar() {
  return (
    <nav>
        <NavLink 
        to='/'
        className={
            ({isActive}) => {
                return isActive ? 'link active' : 'link'
            }
        }
        >Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default StyledNavbar
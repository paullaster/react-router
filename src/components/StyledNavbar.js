import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/style.css'

function StyledNavbar() {
  return (
    <nav>
        <NavLink 
        to='/'
        className={
            ({isActive}) => {
                return isActive ? 'active' : 'link'
            }
        }
        >Home</NavLink>
        <NavLink 
        to='/about'
        className={
            ({isActive}) => {
                return isActive ? 'active' : 'link'
            }
        }>About</NavLink>
        <NavLink 
        to='/contact'
        className={
            ({isActive}) => {
                return isActive ? 'active' : 'link'
            }
        }
        >Contact</NavLink>
    </nav>
  )
}

export default StyledNavbar
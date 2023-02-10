import React from 'react'
import users from '../../data'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {

  return (
    <section>
        <Outlet />
    </section>
  )
}

export default Users
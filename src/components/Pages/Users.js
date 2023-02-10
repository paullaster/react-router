import React from 'react'
import users from '../../data'
import { Link, Outlet } from 'react-router-dom'
import '../../assets/css/style.css'

const Users = () => {

  return (
   <div>
    {
        users.map(({id, name, age, image, profession, country}) =>{
            return(
                <li key={id}>
                    <span>
                        {name}
                    </span>
                    <span>
                        <img src={image} alt={image}/>
                    </span>
                    <span>
                        {country}
                    </span>
                    <Link to={`/users/${id}`} >View user</Link>
                </li>
            )
        })
    }

    <section>
        <Outlet />
    </section>
   </div>
  )
}

export default Users
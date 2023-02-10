import React from 'react'
import users from '../../data'
import { Link } from 'react-router-dom'

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
                        {image}
                    </span>
                    <span>
                        {country}
                    </span>
                    <Link to={`/users/${id}`} >View user</Link>
                </li>
            )
        })
    }
   </div>
  )
}

export default Users
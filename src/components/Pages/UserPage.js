import React from 'react'
import { Link } from 'react-router-dom'
import users from '../../data'
import '../../assets/css/style.css'
const UserPage = () => {
  return (
    <div>
    {
        users.map(({id, name, image, country}) =>{
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
    </div>
  )
}

export default UserPage
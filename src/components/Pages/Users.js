import React from 'react'
import users from '../../data'

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
                    
                </li>
            )
        })
    }
   </div>
  )
}

export default Users
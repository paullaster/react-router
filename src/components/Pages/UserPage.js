import React from 'react'

const UserPage = () => {
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
    </div>
  )
}

export default UserPage
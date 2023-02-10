import React from 'react'
import users from '../../data'

const Users = () => {

  return (
   <div>
    {
        users.map(({id, name, age, image, profession, country}) =>{
            return(

            )
        })
    }
   </div>
  )
}

export default Users
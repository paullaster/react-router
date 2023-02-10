import React from 'react'
import { Link, useParams } from 'react-router-dom'
import users from '../../data'
import '../../assets/css/style.css'
function SingleUser() {
    const {userId} = useParams();
    const user = users.find( (u) => u.id === Number(userId))
    
  return (
    <>
        <div>
            <span>
                {user.name}
            </span>
            <span>
                <img src={user.image} alt={user.image} />
            </span>
            {/* <span>
                {
                    user.profession.map((profession) => {
                        return (
                            <li key={profession}>
                                {profession}
                            </li>
                        )
                    })
                }
            </span> */}
            <span>
                age: {user.age}
            </span>
            <span>
                country: {user.country}
            </span>
            <span>
                language: {user.language}
            </span>
        </div>
        <div>
            <Link to='/users'>Back to users</Link> 
        </div>

    </>
  )
}

export default SingleUser
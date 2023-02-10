import React from 'react'
import { Link, useParams } from 'react-router-dom'
import users from '../../data'
function SingleUser() {
    const {userId} = useParams();
    const {name, image, profession, age, language, country} = users.find( (user) => {
        return user.id === userId
    });
  return (
    <>
        <div>
            <span>
                userId: {userId}
            </span>
        </div>
        <div>
            <Link to='/users'>Back to users</Link> 
        </div>

    </>
  )
}

export default SingleUser
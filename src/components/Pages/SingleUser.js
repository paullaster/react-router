import React from 'react'
import { Link, useParams } from 'react-router-dom'
import users from '../../data'
import '../../assets/css/style.css'
function SingleUser() {
    const {userId} = useParams();
    const {name, image, profession, age, language, country} 
    = users.find( (user) => {
        return user.id === userId
    });
  return (
    <>
        <div>
            <span>
                {name}
            </span>
            <span>
                <img src={image} alt={image} />
            </span>
            <span>
                {
                    profession.map((profession) => {
                        return (
                            <li key={profession}>
                                {profession}
                            </li>
                        )
                    })
                }
            </span>
        </div>
        <div>
            <Link to='/users'>Back to users</Link> 
        </div>

    </>
  )
}

export default SingleUser
import React from 'react'
import { Link, useParams } from 'react-router-dom'
function SingleUser() {
    const {userId} = useParams();
  return (
    <>
        <span>
            userId: {userId}
        </span>
        
    </>
  )
}

export default SingleUser
import React from 'react'
import { Link, useParams } from 'react-router-dom'
function SingleUser() {
    const {userId} = useParams();
  return (
    <>
        <div>
            <span>
                userId: {userId}
            </span>
        </div>

    </>
  )
}

export default SingleUser
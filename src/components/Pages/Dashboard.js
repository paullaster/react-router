import React from 'react'

const Dashboard = ({user}) => {
  console.log(user)
  return (
    <div>
        Hello, {user?.userName}
    </div>
  )
}

export default Dashboard
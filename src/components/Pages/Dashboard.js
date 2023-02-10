import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
        Hello, {user?.userName}
    </div>
  )
}

export default Dashboard
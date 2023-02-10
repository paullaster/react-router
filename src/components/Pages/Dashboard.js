import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
        Hello, {user?.name}
    </div>
  )
}

export default Dashboard
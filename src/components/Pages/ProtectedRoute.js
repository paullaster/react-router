import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({user, children}) => {
  if(!user){
    return <Navigate to='/'/>
  }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
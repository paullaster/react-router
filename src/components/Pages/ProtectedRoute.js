import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({user, children}) => {
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
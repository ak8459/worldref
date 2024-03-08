import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext'

const ProtectedRoutes = ({ children }) => {
    const auth = localStorage.getItem('auth')
    if (auth) {
        return children
    }

    return <Navigate to="/login" />

}

export default ProtectedRoutes
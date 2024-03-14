
import { Routes, Route, } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProtectedRoutes from './ProtectedRoutes'
// import { useContext } from 'react'
const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={
                // <ProtectedRoutes>
                <Home />
                // </ProtectedRoutes>
            } />
            <Route path='/auth/signup' element={<SignUp />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
    )
}

export default AllRoutes
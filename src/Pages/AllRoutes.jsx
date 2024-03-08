
import { Routes, Route, } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProtectedRoutes from './ProtectedRoutes'
// import { useContext } from 'react'
const AllRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={
                <ProtectedRoutes>
                    <Home />
                </ProtectedRoutes>} />
            <Route path='/signup' element={<SignUp />} />
            <Route exact path='/login' element={<SignIn />} />
        </Routes>
    )
}

export default AllRoutes
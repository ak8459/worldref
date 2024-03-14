import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"


const initialState = {
    users: JSON.parse(localStorage.getItem('userInfo')) || [],
}


export const UserContext = createContext(initialState)
const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(initialState)
    const loginUser = (username, password) => {
        const userObj = {
            username,
            password
        }
        localStorage.setItem('auth', true)
        // localStorage.setItem('userInfo', JSON.stringify(userObj))
        setUserData({
            ...userData,
            username,
            password,
        })
    }

    const logoutUser = () => {
        localStorage.removeItem('auth')
        setUserData({
            ...userData,
        })


    }

    const Signup = (username, password) => {
        const userObj = {
            username,
            password
        }
        localStorage.setItem('auth', true)
        localStorage.setItem('userInfo', JSON.stringify(userObj))
        setUserData({
            ...userData,
            username,
            password,
        })

    }



    return (
        <UserContext.Provider value={{ userData, Signup, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
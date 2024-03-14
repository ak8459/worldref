import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Navbar = () => {
    const { logoutUser } = useContext(UserContext)
    const navigate = useNavigate();
    const auth = localStorage.getItem('auth')
    const logoutHandler = () => {
        logoutUser()
        setInterval(() => {
            navigate("/login")
        }, 1000)
    }

    return (
        <nav className="bg-gray-800 p-6 sticky top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={'/'} className="text-white text-3xl font-bold">WorldRef</Link>
                <div className="space-x-6">
                    <Link to={"/"} className="  text-lg text-white">Home</Link>
                    {auth ? <Link onClick={logoutHandler} className=" text-lg text-white">Logout</Link> : <Link to={"/login"} className=" text-lg text-white">Login</Link>}
                    <Link to={"/auth/signup"} className="text-lg text-white">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


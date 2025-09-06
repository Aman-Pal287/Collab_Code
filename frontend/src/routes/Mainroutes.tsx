import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Mainroutes = () => {
    return (
        <Routes>
            <Route to={"/"} element={<Home />} />
            <Route to={"/login"} element={<Login />} />
            <Route to={"/register"} element={<Register />} />
        </Routes>
    )
}

export default Mainroutes
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { GlobalStyle } from "../components/globalStyles/GlobalStyles"
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import About from "../pages/about/About"
import PrivateRouter from "./PrivateRouter"
import Details from "../pages/details/Details"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route  path="register" element={<Register/>} />

      <Route path="about" element={<PrivateRouter/>} >
      <Route path="" element={<About/>} />
      </Route>

      <Route path="details" element={<PrivateRouter/>} >
      <Route path="" element={<Details/>} />
      </Route>

   
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Details from '../pages/details/Details'
import NotFound from "../pages/notfound/NotFound";
const AppRouter = () => {
    const location = useLocation();
  return (
    <div>
      {location.pathname === '/react-app/login' || location.pathname === '/react-app/' ? null: <Navbar/>}
        <div>
          <Routes>
          <Route path="react-app/" exact element={<Login />}/>
            <Route path="react-app/home" element={<Home />} />
            <Route path="react-app/details" element={<Details />} />
            <Route path="react-app/about" element={<About/>} />
            <Route path="react-app/login" element={<Login />} />
            <Route path="react-app/details/:recipeLabel" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </div>
  );
};

export default AppRouter
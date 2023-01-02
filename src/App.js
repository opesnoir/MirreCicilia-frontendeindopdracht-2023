import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";


function App() {
  const auth = false;

  return (
      <>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={auth === true ? <Profile/> : <Navigate to="/"/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>

      </>
  );
}

export default App;

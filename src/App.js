import "./App.css";
import LoginForm from "./components/Login/loginform";
import Home from "./components/Home/Home";
import Signup from "./components/Login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homebt from "./components/Home/pages/homebt";
import About from "./components/Home/pages/About";
import Explore from "./components/Explore/Explore";
import Cart from "./components/Cart/Cart";
import Navbar2 from "./components/Home/Navbar2";
function App() {
  return (
    <BrowserRouter>
    <Navbar2/>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/homebt" element={<Homebt/>}/> */}
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/Explore" element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

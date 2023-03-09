import Home from "./components/home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome.css"
import "./assets/css/glass.css"
import "./assets/css/responsive.css"
import "./assets/css/colors/color-1.css"
import "./assets/css/colors/color-2.css"
import "./assets/css/colors/color-3.css"
import "./assets/css/colors/color-4.css"
import "./assets/css/colors/color-5.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Course from "./components/course";
import Coursedetail from "./components/coursedetail";
import Login from "./components/login";
import Signup from "./components/signup";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="course" element={<Course/>}></Route>
             <Route path="coursedetail" element={<Coursedetail/>}></Route>
             <Route path="login" element={<Login/>}></Route>
             <Route path="signup" element={<Signup/>}></Route>
             <Route path="contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

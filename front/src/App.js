
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Course from "../src/pages/Course.js";
import Start from "../src/pages/Start.js";
import Footer from "./components/Footer.js";
import Login from "../src/components/Login.js"
import CustomerArea from "./components/CustomerArea.js";

//import Courses from "./components/Courses";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CustomerArea" element={<CustomerArea />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

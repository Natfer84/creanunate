import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Course from "../src/pages/Course.js";
//import Courses from "./components/Courses";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/Course" element={<Course />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

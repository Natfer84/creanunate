import "./styles/App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Courses from "./components/Courses";

function App() {
  return (
    <div>
      <Header />
      <Courses />
    </div>
  );
}

export default App;

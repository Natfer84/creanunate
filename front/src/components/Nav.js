import React from "react";
//import { Link } from "react-router-dom";
import bolsaCompras from "../images/bolsa-compras.jpg";
//import Courses from '../components/Courses.js';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <div className="Nav_container">
      <nav className="Box__nav">
        <ul className="Box__Nav__Ul">
          <li className="Box__Nav__Li">Inicio</li>
          <li className="Box__Nav__Li">Cursos</li>
          <li className="Box__Nav__Li">
            <img
              className="Box__Nav__img__car"
              src={bolsaCompras}
              alt="Bolsa de compras"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

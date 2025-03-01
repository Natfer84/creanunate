import React from "react";
import { Link } from "react-router-dom";
//import bolsaCompras from "../images/bolsa-compras.jpg";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="Nav_container">
      <nav className="Box__nav">
        <ul className="Box__Nav__Ul">
          
          <li className="Box__Nav__Li">
            <Link to="/">Inicio</Link>
          </li>

          <li className="Box__Nav__Li">
            <Link to="/Course">Cursos</Link>
          </li>

          <li className="Box__Nav__Li">
          <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

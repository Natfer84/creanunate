import React from "react";
import '../styles/Heart.css';
import { useNavigate } from "react-router-dom";

// Componenete corazón en favoritos
// En la actualidad, si hacemos click nos redirige a realizar el login
// En la versión 2, si hacemos click en él realiza una petición POST y llevaría el curso a CustomerAsrea del cliente logado

export default function Heart() {

  const navigate = useNavigate();

  return <div className="Heart__favorites" onClick={()=> navigate("/Login")}></div>
}

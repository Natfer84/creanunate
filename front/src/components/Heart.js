import React from "react";
import '../styles/Heart.css';
import { useNavigate } from "react-router-dom";

export default function Heart() {

  const navigate = useNavigate();

  return <div className="Heart__favorites" onClick={()=> navigate("/Login")}></div>
}

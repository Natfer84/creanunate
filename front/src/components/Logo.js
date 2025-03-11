import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Logo.css';

// Si haces click en logo te lleva a inicio
export default function Logo() {
  return (
    <div className="Logo_box">
     <Link to="/">
     <img className='Logo_img' src="/images/logoCreanunate.jpg" alt="logo"></img>
     </Link>
    </div>
  );
}

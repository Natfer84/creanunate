import React, { useState } from "react";
import "../styles/Login.css"

export default function Login() {

    const [password, setpasword] = useState('');
    const [username, setUsername] = useState('');



  const handdleLogin = (e) => {
    e.preventDefault();
    console.log({password, username});
  };

  return (
    <div className="Login__container">
      <form className="Login__Form">

        <label className="Login__Label">Usuario</label>

        <input onChange={(event) => {setUsername(event.target.value)} } 
        placeholder="Email"
        type="text" 
        className="Login__Input" />

        <label className="Login__Label">Contraseña</label>
        <input onChange={(event) => {setpasword(event.target.value)} }
        placeholder="Contraseña " 
        type="password"
        className="Login__Input" />

        <button onClick={handdleLogin} className="Login__button">
          Acceder
        </button>

      </form>
    </div>
  );
}

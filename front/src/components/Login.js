import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "../styles/Login.css"

export default function Login() {

const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    console.log(username);
    console.log(password);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
    username: username,
    password: password 
    
    };

    fetch("http://localhost:3001/creanunate/login/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    //////mirar esto////////////
    .then(response => {
      console.log(response);  // Verifica la respuesta del servidor
      return response.json();
   })
    .then(result =>{
      console.log(result) 
    })
    .catch(error =>{
      console.log(error)
    })
  
  };

  return (
    <div className="Login__container">
      <form className="Login__Form">

        <label className="Login__Label">Usuario</label>

        <input onChange={(event) => {setUsername(event.target.value)} } 
        placeholder="Email"
        type="text" 
        className="Login__Input"
         />

        <label className="Login__Label">Contraseña</label>
        <input onChange={(event) => {setPassword(event.target.value)} }
        placeholder="Contraseña " 
        type="password"
        className="Login__Input"
         />

        <button onClick={handleLogin} className="Login__button">
          Acceder
        </button>

      </form>
    </div>
  );
}

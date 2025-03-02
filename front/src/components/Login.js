import React, { useState } from "react";
import "../styles/Login.css"

export default function Login() {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    console.log(password);
    console.log(username);


  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
    password: password,  
    username: username
    };

    fetch("http://localhost:3001/creanunate/login/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
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

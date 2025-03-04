import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "../styles/Login.css"

export default function Login() {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //para mostrar los errores en login
    const [errorMessage, setErrorMessage] = useState('');

    
    
    console.log(username);
    console.log(password);

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage('');


    const data = {
    username: username,
    password: password 
    };


    try{

    const response = await fetch("http://localhost:3001/creanunate/login/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    
   

  const result = await response.json();
  console.log("Respuesta del backend:", result);
   if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
  }

} catch (error) {
  console.error("Error en el login:", error);
  //capturas el error en el estado setErrorMessage
  setErrorMessage(error.resul)
}
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
         {errorMessage && <p className="Login__Error">{errorMessage}</p>}
         {!errorMessage && <p className="Login__Error">{errorMessage}</p>}

        <button onClick={handleLogin} className="Login__button">
          Acceder
        </button>

      </form>
    </div>
  );
}

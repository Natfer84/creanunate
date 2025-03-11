import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //para mostrar login ok o error al hacer login
  const [errorMessage, setErrorMessage] = useState("");
  const [loginOk, setLoginOk] = useState("");
  const [unknownError, setUnknowError] = useState("");

  const navigate = useNavigate();

  console.log(username);
  console.log(password);

  // Hacemo click y nos lleva a los posibles estados del login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoginOk("");
    setUnknowError("");

    // Comprobamos si faltan datos en login
    if (!username || !password) {
      setErrorMessage("El campo usuario y/o contraseña, no puede estar vacío");
      return; // Detener la ejecución si los campos están vacíos.
    }

    const data = {
      username: username,
      password: password,
    };
    
    try {
      const response = await fetch(
        "http://localhost:3001/creanunate/login/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Respuesta del backend:", result);
      if (result.message === "Login exitoso") {
        setLoginOk("¡Login exitoso! Bienvenida/o.");

        // TOKEN

        if (result.token) {
          localStorage.setItem("token", result.token); // se guarda el token en localStore
          console.log("token del front: ", result.token);
        }
        console.log("Token JWT:", localStorage.getItem("token"));

        localStorage.setItem("username", result.user.username); // Guardamos username
        localStorage.setItem("userId", result.user.id); // Guardamos userId
        // Si login ok, nos redirige a CustomArea
        navigate("/CustomerArea");
      }

      if (result.error === "El usuario no existe") {
        setErrorMessage("El usuario no existe");
        return;
      }
    } catch {
      console.error("Error en el login:");
      //capturas el error en el estado setErrorMessage
      setUnknowError("Ha ocurrido un error desconocido.");
    }
  };

  return (
    <div>
      <div className="Login__container">
        <form className="Login__Form">
          <label className="Login__Label">Usuario</label>

          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            placeholder="Email"
            type="text"
            className="Login__Input"
          />

          <label className="Login__Label">Contraseña</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Contraseña "
            type="password"
            className="Login__Input"
          />
          {errorMessage && <p className="Login__Error">{errorMessage}</p>}
          {loginOk && <p className="Login__Success">{loginOk}</p>}
          {unknownError && <p className="Login__Success">{unknownError}</p>}

          <button onClick={handleLogin} className="Login__button">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
}

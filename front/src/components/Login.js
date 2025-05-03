import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

/**
 * Componente de inicio de sesión.
 *
 * - Permite a los usuarios ingresar su nombre de usuario y contraseña.
 * - Envía los datos al backend para autenticación.
 * - Maneja diferentes estados según el resultado del login.
 * - Al iniciar sesión correctamente, guarda el token y los datos del usuario en `localStorage`
 *   y redirige a la página de `CustomerArea`.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el formulario de login.
 */

export default function Login() {
  // Estados para almacenar las credenciales del usuario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Estados para manejar mensajes de error o éxito en el login
  const [errorMessage, setErrorMessage] = useState("");
  const [loginOk, setLoginOk] = useState("");
  const [unknownError, setUnknowError] = useState("");

  const navigate = useNavigate();

  /**
   * Maneja el proceso de inicio de sesión.
   *
   * - Valida que los campos no estén vacíos.
   * - Envía una solicitud `POST` al backend con las credenciales del usuario.
   * - Guarda el token de autenticación y otros datos en `localStorage` si el login es exitoso.
   * - Redirige al usuario a la página `CustomerArea` tras un login exitoso.
   *
   * @param {Event} e - Evento del formulario.
   */

  // Hacemo click y nos lleva a los posibles estados del login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoginOk("");
    setUnknowError("");

    // Validación: comprobar si los campos están vacíos
    if (!username || !password) {
      setErrorMessage("El campo usuario y/o contraseña, no puede estar vacío");
      return; // Detener la ejecución si los campos están vacíos.
    }

    const data = {
      username: username,
      password: password,
    };

    try {
      // Petición al backend para verificar las credenciales
      const response = await fetch(
        `https://creanunate-production.up.railway.app/creanunate/login/login`,  //'http://localhost/creanunate/login/login'
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
 

      console.log('Response Status:', response.status); // Muestra el código de estado
    console.log('Response Headers:', response.headers); // Muestra las cabeceras de la respuesta

      const result = await response.json();
       console.log('Response Body:', result);

      if (result.message === "Login exitoso") {
        setLoginOk("¡Login exitoso! Bienvenida/o.");

        // TOKEN
        // Si el login es exitoso, guarda el token y los datos del usuario en localStorage
        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        localStorage.setItem("username", result.user.username); // Guarda el nombre de usuario
        localStorage.setItem("userId", result.user.id); /// Guarda el ID del usuario
        // Redirige a la página de CustomerArea tras el login exitoso
        navigate("/CustomerArea");
      }
      // Maneja el caso en el que el usuario no existe
      if (result.error === "El usuario no existe") {
        setErrorMessage("El usuario no existe");
        return;
      }
    } catch {
      // Captura errores desconocidos y los muestra al usuario
      setUnknowError("Ha ocurrido un error desconocido.");
    }
  };

  return (
    <div>
      <div className="Login__container">
        <form className="Login__Form">
          {/* Campo de usuario */}
          <label className="Login__Label">Usuario</label>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            placeholder="Email"
            type="text"
            className="Login__Input"
          />

          {/* Campo de contraseña */}
          <label className="Login__Label">Contraseña</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Contraseña "
            type="password"
            className="Login__Input"
          />

          {/* Mensajes de error o éxito */}
          {errorMessage && <p className="Login__Error">{errorMessage}</p>}
          {loginOk && <p className="Login__Success">{loginOk}</p>}
          {unknownError && <p className="Login__Success">{unknownError}</p>}

          {/* Botón para iniciar sesión */}
          <button onClick={handleLogin} className="Login__button">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
}

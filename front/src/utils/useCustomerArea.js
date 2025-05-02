import { useEffect, useState } from "react";
/**
 * Hook personalizado para gestionar el área de usuario y obtener sus favoritos desde el backend.
 * 
 * @returns {Object} Un objeto con:
 *  - `username` {string}: El nombre de usuario obtenido del localStorage.
 *  - `favorites` {Array}: Lista de elementos favoritos del usuario.
 *  - `error` {string}: Mensaje de error en caso de fallo en la obtención de favoritos.
 */



export default function useCustomerArea() {
  /** 
     * Nombre de usuario obtenido del localStorage.
     * Si no existe, se asigna una cadena vacía para evitar valores `null`.
     * @type {string} 
     */
    const username = localStorage.getItem('username') || ''; // Asegura que no sea null
    console.log("Username desde localStorage:", username);
/** 
     * Estado para almacenar los favoritos del usuario.
     * @type {Array} 
     */
    const [favorites, setFavorites] = useState([]);
     /** 
     * Estado para almacenar errores en la obtención de favoritos.
     * @type {string} 
     */
    const [error, setError] = useState('');

    useEffect(() => {
      if (!username) {
        console.warn("No hay username, no se hace la petición");
        return;
      }
      /**
         * Función asíncrona para obtener los favoritos del usuario desde la API.
         * Realiza una petición GET a `http://localhost:3001/favorites` con el `username` como parámetro.
         * 
         * @async
         * @function getUserFavorites
         * @throws {Error} Si la petición al backend falla.
         * REACT_APP_API_URL = URL AL BACKEND DE RAILWAY
         */

      const getUserFavorites = async () => {
        try {
          const url = `https://REACT_APP_API_URL/favorites?username=${encodeURIComponent(username)}`; //HE CAMBIADO LOCALHOST A REACT_APP_API_URL
      
          console.log("URL de la petición:", url);

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("No se pudieron obtener los favoritos");
          }

          const result = await response.json();
          console.log("Resultado del backend en el front:", result);

          if (!result.favorites) {
            console.warn("No hay favoritos en la respuesta.");
            setFavorites([]);
            return;
          }

          setFavorites(result.favorites);
        } catch (error) {
          console.error("Error al obtener los favoritos:", error);
          setError(error.message);
        }
      };

      getUserFavorites();

    }, [username]);
    return { username, favorites, error };
  }
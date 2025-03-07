import { useEffect, useState } from "react";



export default function useCustomerArea() {
    const username = localStorage.getItem('username') || ''; // Asegura que no sea null
    console.log("Username desde localStorage:", username);

    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      if (!username) {
        console.warn("No hay username, no se hace la petición");
        return;
      }

      const getUserFavorites = async () => {
        try {
          const url = `http://localhost:3001/favorites?username=${encodeURIComponent(username)}`;
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
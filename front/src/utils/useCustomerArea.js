import { useEffect, useState, useCallback } from "react";

export default function useCustomerArea({ username }) {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  // 🔹 Envolvemos la función en useCallback para evitar que cambie en cada render
  const getUserFavorites = useCallback(async () => {
    if (!username) return;

    try {
      const response = await fetch(`http://localhost:3001/creanunate/courses/get-user-favorites?username=${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los cursos favoritos');
      }

      const result = await response.json();
      console.log('Cursos favoritos:', result);

      setFavorites(result.favorites || []);
    } catch (error) {
      console.error('Error al obtener los cursos favoritos:', error);
      setError('No se pudieron obtener los cursos favoritos');
    }
  }, [username]); 

 
  useEffect(() => {
    getUserFavorites();
  }, [getUserFavorites]);

  return { favorites, error };
}

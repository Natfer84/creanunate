import { useEffect, useState} from "react";

export default function useCustomerArea({ username }) {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  
  const getUserFavorites = async () => {
    if (!username) return;

    try {
      const response = await fetch(`http://localhost:3001/creanunate/courses/get-user-favorites?username=${username}`, {
        
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log("response de use customer ares", response)
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
  }; 

 
  useEffect(() => {
    getUserFavorites();
  }, [getUserFavorites]);

  return { favorites, error };
}

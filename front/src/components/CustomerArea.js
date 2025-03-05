/*
import React, { useState, useEffect } from 'react';
import "../styles/CustomerArea.css";



export default function UserFavorites() {
    
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  // Función para obtener los favoritos del usuario
  const getUserFavorites = async () => {
    try {
      const response = await fetch('http://localhost:3001/creanunate/courses/get-user-favorites', {
        method: 'GET', // Es una solicitud GET
        headers: {
          'Content-Type': 'application/json',
          // Si necesitas enviar un token de autenticación, por ejemplo:
          // 'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los cursos favoritos');
      }

      const result = await response.json();
      console.log('Cursos favoritos:', result);

      // Asignar los resultados de la respuesta a los favoritos
      setFavorites(result.favorites); // Asegúrate de que el backend devuelve un objeto con la propiedad 'favorites'
    } catch (error) {
      console.error('Error al obtener los cursos favoritos:', error);
      setError('No se pudieron obtener los cursos favoritos');
    }
  };

  // Llamar a la función para obtener los favoritos cuando el componente se monta
  useEffect(() => {
    getUserFavorites();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <h2>Mis Cursos Favoritos</h2>
      {error && <p>{error}</p>}
      {favorites.length === 0 ? (
        <p>No tienes cursos favoritos.</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <h3>{favorite.name}</h3>
              <p>{favorite.description}</p>
              <p>Precio: ${favorite.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


*/
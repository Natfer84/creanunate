import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import "../styles/CustomerArea.css";

export default function CustomerArea() {
    const navigate = useNavigate();
    const username = navigate.state?.username || '';
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('');

    // 🔹 Obtener favoritos desde el backend cuando el componente se carga
    useEffect(() => {
      const getUserFavorites = async () => {
        try {
          const response = await fetch(`http://localhost:3001/creanunate/courses/get-user-favorites?username=${username}`);
          if (!response.ok) {
            throw new Error("No se pudieron obtener los favoritos");
          }
          const result = await response.json();
          setFavorites(result.favorites || []);
        } catch (error) {
          setError(error.message);
        }
      };
  
      if (username) {
        getUserFavorites();
      }
    }, [username]);
  
    return (
      <div>
        <h1>Bienvenido, {username}</h1>
        <h2>Mis Cursos Favoritos</h2>
        {error && <p>{error}</p>}
        {favorites.length === 0 ? <p>No tienes cursos favoritos.</p> : (
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id}>
                <h3>{fav.name}</h3>
                <p>{fav.description}</p>
                <p>Precio: ${fav.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

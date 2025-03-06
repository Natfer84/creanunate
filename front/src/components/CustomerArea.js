//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import useCustomerArea from "../utils/useCustomerArea";
import "../styles/CustomerArea.css";

export default function CustomerArea() {
    const username = localStorage.getItem('username'); //// aquí los recoge, se ven
    console.log(username)
    const userId = localStorage.getItem('userId');  //// aquí los recoge, se ven
console.log(userId)

    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState('');

 // obtenemos el username desde el localStorage y accedemos a los favoritos desde el backend
    useEffect(() => {
      if (!username) return;

      const getUserFavorites = async () => {
        try {
          const response = await fetch(`http://localhost:3001/creanunate/courses/get-user-favorites?username=${username}`);
          console.log("response del flont: " `http://localhost:3001/creanunate/courses/get-user-favorites?username=${username} `);

          if (!response.ok) {
            throw new Error("No se pudieron obtener los favoritos");
          }
          const result = await response.json();
          console.log("result del front area cliente" , result); ////////////////// aquí no entra favoritos
          setFavorites(result.favorites || []);
        } catch (error) {
          setError(error.message);
        }
      };                          ////?username=${username}
                                ///creanunate/courses/get-user-favorites
   
        getUserFavorites();
      
    }, [userId]);//// estoy cambiando esto
  
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

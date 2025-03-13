import useCustomerArea from "../utils/useCustomerArea";
//import { useEffect, useState } from "react";
import Heart from "./Heart";
import Logout from "./Logout";
import { useState } from "react";
import "../styles/CoursesFavorites.css";

/**
 * Componente que representa el área del cliente logado.
 *
 * - Muestra un mensaje de bienvenida.
 * - Permite ver y ocultar los cursos favoritos del usuario.
 * - Usa el **custom hook `useCustomerArea`** para obtener la lista de cursos favoritos.
 * - Incluye un botón para cerrar sesión (`Logout`).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el área de usuario.
 */

export default function CustomerArea() {
  /**
   * Obtiene los cursos favoritos y posibles errores desde el custom hook `useCustomerArea`.
   * @type {{ favorites: Array<Object>, error: string }}
   */

  const { favorites, error } = useCustomerArea(); //custom hook
  /**
   * Estado para controlar la visibilidad de los cursos favoritos.
   * Inicialmente está en `true`, por lo que los cursos se muestran.
   *
   * @type {[boolean, Function]}
   */
  const [showFavorites, setShowFavorites] = useState(false); // aquí verdadero para mostrarlos

  return (
    <div className="Courses_container_Favorites">
      {/* Encabezado con el título, botón para mostrar/ocultar favoritos y logout */}
      <div className="Box__favorites__h1_h2">
        <h1>Hola! Estás en tu área cliente</h1>

        {/* Botón para alternar la visibilidad de los favoritos */}
        <h2
          onClick={() => {
            console.log("Click en Mis Cursos Favoritos");
            setShowFavorites(!showFavorites);
          }}
        >
          Mis Cursos Favoritos
        </h2>

        {/* Botón para cerrar sesión */}
        <div>
          <Logout />
        </div>
      </div>

      {/* Muestra un mensaje de error si hay problemas al obtener los cursos */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Si el usuario no tiene cursos favoritos, muestra un mensaje */}
      {favorites.length === 0 ? (
        <p>No tienes cursos favoritos.</p>
      ) : (
        <div className="Box__favorites">
          {/* Renderiza los cursos favoritos si `showFavorites` es true */}
          {favorites.map(
            (fav) =>
              showFavorites && (
                <div className="Box__favorites__div" key={fav.id}>
                  <h3>{fav.name}</h3>
                  <p>{fav.description}</p>

                  {/* Precio del curso y botón de favoritos */}
                  <div className="Box__favorites__Price_Heart">
                    <p>{fav.price}€</p>
                    <div>
                      <Heart />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

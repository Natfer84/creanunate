import useCustomerArea from "../utils/useCustomerArea";
//import { useEffect, useState } from "react";
import Heart from "./Heart";
import Logout from "./Logout";
import { useState } from "react";
import "../styles/CoursesFavorites.css";


export default function CustomerArea(){
  
  const { favorites, error } = useCustomerArea(); //custom hook
  const [showFavorites, setShowFavorites] = useState(true); // aquí verdadero para mostrarlos

    return (
      <div className="Courses_container_Favorites">
        <div className="Box__favorites__h1_h2">
        <h1>Hola! Estás en tu área cliente</h1>
         <h2 onClick={() => {console.log("Click en Mis Cursos Favoritos");setShowFavorites(!showFavorites)}}> {/*aqui falso para que no semuestren*/}
          Mis Cursos Favoritos
        </h2>
        <div>
          <Logout />
        </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      
        {favorites.length === 0 ? <p>No tienes cursos favoritos.</p> : (
        <div className="Box__favorites">
            {favorites.map((fav) => (
              showFavorites && (
              <div className="Box__favorites__div" key={fav.id} >
                <h3>{fav.name}</h3>
                <p>{fav.description}</p>
                <div className="Box__favorites__Price_Heart">
                <p>{fav.price}€</p>
               <div>
                  <Heart />
              </div>
              </div>
              </div>
            )))}
       </div>
        )}
      </div>
    );
  }


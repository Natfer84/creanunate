import useCustomerArea from "../utils/useCustomerArea";
//import { useEffect, useState } from "react";
import Heart from "./Heart";
import "../styles/CoursesFavorites.css";


export default function CustomerArea(){
  
  const { favorites, error } = useCustomerArea();
    return (
      <div className="Courses_container_Favorites">
        <div className="Box__favorites__h1_h2">
        <h1>Bienvenido/a</h1>
        <h2>Mis Cursos Favoritos</h2>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {favorites.length === 0 ? <p>No tienes cursos favoritos.</p> : (
        <div className="Box__favorites">
            {favorites.map((fav) => (
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
            ))}
       </div>
        )}
      </div>
    );
  }


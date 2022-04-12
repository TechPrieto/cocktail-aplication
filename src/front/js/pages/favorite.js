import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "./fullCards";
import { Cards } from "./cards";

export const Favorite = ({ data }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [show, setShow] = useState("recipes");
  const [recipeInp, setRecipeInp] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchRes();
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {
        store.favorites.map((fav, i) => {

          return (
            <div key={i} className="card d-flex flex-wrap justify-content-center m-4" style={{ minWidth: "18rem", maxWidth: "22rem", minHeight: "16rem", margin: '0.2rem', marginTop: '1.5rem', padding: '10px', boxShadow: '2px 8px 17px #0F0C24' }}>
              <Link to={{ pathname: "information/" + fav.strDrink, state: fav }} className="text-decoration-none">
                <div className="">
                  <img className="imageHome rounded mx-auto d-block" src={fav.strDrinkThumb} style={{ width: "200px", height: 'auto', objectFit: "cover" }} />
                  <div className="text-white text-center">

                    <h1>{fav.strDrink}</h1>
                    <p className="card-text">Category: {fav.strCategory}</p>
                    <p className="card-text">Alcoholic: {fav.strAlcoholic}</p>
                    <p className="card-text">Glass Type: {fav.strGlass}</p>
                  </div>
                </div>
              </Link>
              <button className="button" style={{ width: "auto", height: "auto", margin: "10px" }}
                onClick={() => actions.deleteFav(fav)}
              >delete</button>

            </div>
          );
        })
      }
    </div >
  );
};

Favorite.propTypes = {
  match: PropTypes.object,
};

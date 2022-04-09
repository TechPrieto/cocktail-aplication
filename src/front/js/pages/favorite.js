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
    <div className="d-fex">
      {store.favorites.map((fav, i) => {

        return (
          <div key={i} className="border border-black">
            <Link to={{ pathname: "information/" + fav.strDrink, state: fav }} className="text-decoration-none">
              <div>
                <img className="imageHome" src={fav.strDrinkThumb} style={{ width: "200px", height: 'auto', objectFit: "cover" }} />
                <div className="text-center">

                  <h1>{fav.strDrink}</h1>
                  <p className="card-text">Category: {fav.strCategory}</p>
                  <p className="card-text">Alcoholic: {fav.strAlcoholic}</p>
                  <p className="card-text">Glass Type: {fav.strGlass}</p>
                </div>
                <i
                  className="fas fa-trash-alt m-2"
                  onClick={() => actions.deleteFav(fav)}
                ></i>
              </div>
            </Link>

          </div>
        );
      })}
    </div>
  );
};

Favorite.propTypes = {
  match: PropTypes.object,
};

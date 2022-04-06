import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "../pages/fullCards";
import { Cards } from "../pages/cards";

export const PopularDrinks = ({ data }) => {
  const fetchRes = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`
    );
    const data = await res.json();
    setRecipeInp("");
    setRecipe(data.drinks);
    console.log(data.drinks);
  };

  useEffect(() => {
    fetchRes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchRes();
  };

  const [recipe, setRecipe] = useState([]);
  const [recipeInp, setRecipeInp] = useState([]);
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-center align-items-center"></div>
      <div className="container d-flex flex-wrap justify-content-center">
        {/*el slice para limitar las cartas a 8 items y el map para hacer el loop*/}
        {recipe.slice(0, 8).map((rec, index) => {
          return (
            <div key={index}>
              <Cards rec={rec} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

PopularDrinks.propTypes = {
  match: PropTypes.object,
};

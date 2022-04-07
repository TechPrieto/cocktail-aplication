import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "./fullCards";
import { Cards } from "./cards";

export const RecipeBrowser = ({ data }) => {
  const [recipe, setRecipe] = useState([]);
  const [recipeInp, setRecipeInp] = useState([]);
  const [nonAlcoholic, setNonAlcoholic] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    fetchRes();
  }, []);

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  const fetchRes = async () => {
    const res = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${recipeInp}`
    );
    const data = await res.json();
    setRecipeInp("");
    setRecipe(data.drinks);
    console.log(data.drinks);
  };

  const getCocktailDetails = async (cocktails) => {
    let localRecipes = [];

    for (let cocktail of cocktails) {
      fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
      )
        .then((data) => data.json())
        .then((result) => {
          console.log(result.drinks[0]);
          localRecipes.push(result.drinks[0]);
          console.log(localRecipes);
        })
        .catch((error) => console.error(error));
    }
    setRecipe(localRecipes);
  };

  const fetchNonAlcoholic = async () => {
    const res = await fetch(
      "https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );
    const data = await res.json();
    getCocktailDetails(data.drinks);
    setRecipe([...recipe]);
  };

  const fetchAlcoholic = async () => {
    const res = await fetch(
      "https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    );
    const data = await res.json();
    setRecipe(data.drinks);
    console.log(data.drinks);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchRes();
  };

  return (
    <div className="">
      <div className="d-flex align-items-baseline justify-content-center">
        <div
          className="input-group mb-3 mt-3"
          style={{ width: "600px", height: "auto" }}
        >
          <form onSubmit={onSubmit} className="input-group mb-3 mt-3">
            <div className="dropdown m-2">
              <a
                className="button dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={fetchNonAlcoholic}
                  >
                    Non alcoholic drinks
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={fetchAlcoholic}
                  >
                    Alcoholic drinks
                  </a>
                </li>
              </ul>
            </div>

            <input
              type="text"
              className="form-control me-2 rounded"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={recipeInp}
              onChange={(e) => setRecipeInp(e.target.value)}
            />
            <button
              className="button m-2"
              type="button"
              id="button-addon1"
              value=""
              onClick={fetchRes}
              style={{ borderRadius: "10px" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-center">
        {recipe
          ? recipe.map((rec, index) => {
              return (
                <div key={index}>
                  <Cards rec={rec} />
                </div>
              );
            })
          : nonAlcoholic
          ? nonAlcoholic.map((rec, index) => {
              return (
                <div key={index}>
                  <Cards rec={rec} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

RecipeBrowser.propTypes = {
  match: PropTypes.object,
};

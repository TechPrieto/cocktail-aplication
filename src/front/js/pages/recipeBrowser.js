import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullCards } from "./fullCards";
import { Cards } from "./cards";

export const RecipeBrowser = ({ data }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [show, setShow] = useState("recipes");
  const [recipeInp, setRecipeInp] = useState([]);

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
                    onClick={() => setShow("recipes")}
                  >
                    Suggested recipes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setShow("nonAlcoholic")}
                  >
                    Non alcoholic drinks
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setShow("alcoholic")}
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
              type="text"
              id="button-addon1"
              value=""
              onClick={() => actions.fetchRes(recipeInp)}
              style={{ borderRadius: "10px" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-center">
        {show == "recipes"
          ? store.recipes.map((rec, index) => {
              return (
                <div key={index}>
                  <Cards rec={rec} />
                </div>
              );
            })
          : show == "nonAlcoholic"
          ? store.nonAlcoholic.map((rec, index) => {
              return (
                <div key={index}>
                  <Cards rec={rec} />
                </div>
              );
            })
          : show == "alcoholic"
          ? store.alcoholic.map((rec, index) => {
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

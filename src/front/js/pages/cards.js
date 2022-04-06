import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const [icon, setIcon] = useState(false)
  const [addFav, setAddFav] = useState(0)
  var isFav = store.favorites.find(fav => fav.name == rec.strDrink);
  console.log("isFave", isFav);
  const params = useParams();
  return (
    <div className="container">
      <div className="card" style={{ minWidth: "18rem", maxWidth: "22rem", minHeight: "16rem", margin: '0.2rem', marginTop: '1.5rem', padding: '10px', boxShadow: '2px 8px 17px #0F0C24' }}>
        <img className="imageHome" src={rec.strDrinkThumb} style={{ width: "100%", height: '12rem', objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{rec.strDrink == undefined?'loading':rec.strDrink}</h5>
          <p className="card-text"></p>
          <p className="card-text">Category: {rec.strCategory}</p>
          <p></p>
          <p className="card-text">Alcoholic: {rec.strAlcoholic}</p>
          <p className="card-text">Glass Type: {rec.strGlass}</p>
          <div className="row">

            <div className="col-10">
              <Link to={{ pathname: "information/" + rec.name, state: rec }} className="link">
                <button className="button d-flex justify-content-between m-1">
                  See Instructions
                </button>
              </Link>
            </div>
            <div className="col-2">
              <button
                onClick={() => {
                  actions.addFav(rec);
                  setIcon(!icon)
                }}

              >
                {icon ? 
                  <i className="fas fa-heart" ></i>
                 : 
                  <i className="far fa-heart"></i>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  match: PropTypes.object,
};
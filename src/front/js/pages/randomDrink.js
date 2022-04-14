import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { FullCards } from "./fullCards";
import { Cards } from "./cards";

export const RandomDrink = () => {
  const fetchRes = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setRandom(data.drinks);
    console.log(data.drinks);
  };

  // useEffect(() => {
  //     fetchRes()
  // }, []);

  const [random, setRandom] = useState([]);
  const params = useParams();
  return (
    <div>
      {random ? (
        <div className="d-flex justify-content-center row">
          <div className="px-5 col-sm-6 col-md-6 text-center">
            <h3 className="mt-5 ">Don't know what to choose?</h3>
            <h4>
              Click on the button and let's see what drink destiny has in store
              for you... Cheers!
            </h4>
            <div
              className=""
              style={{ width: "700px", height: "auto", margin: "auto" }}
            >
              <button
                className="my-button m-5 "
                type="button"
                id="button-addon1"
                value=""
                onClick={fetchRes}
              >
                <i className="fas fa-cocktail" style={{ fontSize: "3em" }}></i>
              </button>
            </div>
          </div>

          <div
            className="container col-sm-6 col-md-6 mb-4"
            style={{ width: "700px", height: "auto", margin: "auto" }}
          >
            {random.map((rec, index) => {
              return (
                <div key={index}>
                  <Cards rec={rec} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

RandomDrink.propTypes = {
  match: PropTypes.object,
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage8 from "../../img/italy.jpg";
import rigoImage9 from "../../img/usa.jpg";
import rigoImage10 from "../../img/german.jpg";
import { object } from "prop-types";
import { element } from "prop-types";

export const Information = ({ rec }) => {
  var rec = useLocation().state;
  console.log("estos es:", rec);
  const { store, actions } = useContext(Context);
  const [language, setLanguage] = useState("");
  const [ingredients, setingredients] = useState("");
  const [icon, setIcon] = useState(false);
  const [addFav, setAddFav] = useState(0);
  const [colorButton, setColorButton] = useState("buttonList");
  const params = useParams();

  const drinkArray = [];

  for (const key in rec) {
    if (rec[key] != null) drinkArray.push({ [key]: rec[key] });
  }
  console.log("What it is this", drinkArray);

  let ingredientes = [];

  drinkArray.forEach((item) => {
    for (let key in item) {
      if (key.includes("Ingredient") && item[key] != null) {
        ingredientes.push(item[key]);
      }
    }
  });

  console.log("Working?", ingredientes);

  let medidas = [];

  drinkArray.forEach((item) => {
    for (let key in item) {
      if (key.includes("Measure") && item[key] != null) {
        medidas.push(item[key]);
      }
    }
  });

  console.log("Working?", medidas);

  // const filtered = drinkArray.filter((element) =>  element.);

  // console.log("Filtrado:", filtered);

  // const arr = Object.keys(rec);
  // const arrObj = arr.map((key) => {
  //   return { [key]: rec[key] };
  // });
  // console.log("work?:", arrObj);

  // const filtered = arrObj.filter(
  //   (element) =>
  //     element.strIngredient4 !== null &&
  //     element.strIngredient5 !== null &&
  //     element.strIngredient6 !== null
  // );

  // console.log("its filter?:", filtered);

  // // Use `map` to get a new array with new objects
  // var filledProps = arrObj.map((el) => {
  //   // Loop the property names of `el`, creating a new object
  //   // with the ones whose values aren't `null`.
  //   // `reduce` is commonly used for doing this:
  //   return Object.keys(el).reduce((newObj, key) => {
  //     const value = el[key];
  //     if (value !== null) {
  //       newObj[key] = value;
  //     }
  //     return newObj;
  //   }, {});
  // });
  // console.log(filledProps);

  return (
    <div className="container-fluid mt-3">
      <div className="card1 mb-3" style={{ maxWidth: "1100px", boxShadow: '2px 8px 17px #0F0C24' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={rec.strDrinkThumb}
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "auto", height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 class="card-title border-bottom border-dark">
                {rec.strDrink}
              </h5>
              <p class="card-text border-bottom border-dark">
                Instructions:{" "}
                {language == "italian"
                  ? rec.strInstructionsIT
                  : language == "german"
                    ? rec.strInstructionsDE
                    : rec.strInstructions}
              </p>
              <h3>Ingredients</h3>

              <ul className="list-group">
                {ingredientes.map((ing, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <strong>{ing}</strong>
                      <span>: </span>
                      {medidas[index] ? medidas[index] : "As desired"}
                    </li>
                  );
                })}
              </ul>

              {/* <p className="card-text">
                <strong>{rec.strIngredient1} </strong> {rec.strMeasure1}:
              </p>
              <p className="card-text">
                {" "}
                <strong>{rec.strIngredient2} </strong> {rec.strMeasure2}
              </p>
              <p className="card-text">
                {" "}
                <strong>{rec.strIngredient3} </strong> {rec.strMeasure3}{" "}
              </p>
              <p className="empty card-text">
                <strong>{rec.strIngredient4}</strong> {rec.strMeasure4}
              </p>
              <p className="empty card-text">
                {" "}
                <strong>{rec.strIngredient5}</strong> {rec.strMeasure5}
              </p>
              <p className="empty card-text">
                {" "}
                <strong>{rec.strIngredient6}</strong> {rec.strMeasure6}
              </p>
              <p className="empty card-text">
                {" "}
                <strong>{rec.strIngredient7}</strong> {rec.strMeasure7}
              </p>
              <p className="emptycard-text">
                {" "}
                <strong>{rec.strIngredient8}</strong> {rec.strMeasure8}
              </p> */}
            </div>

            <div className="d-flex justify-content-end">
              <div className="m-2">
                {rec.strInstructionsIT && language != "italian" && (
                  <img
                    src={rigoImage8}
                    style={{
                      width: "60px",
                      height: "auto",
                      borderRadius: "40px",
                    }}
                    onClick={() => {
                      setLanguage("italian");
                    }}
                  />
                )}
                {language != "" && (
                  <img
                    src={rigoImage9}
                    style={{
                      width: "60px",
                      height: "auto",
                      borderRadius: "40px",
                    }}
                    onClick={() => {
                      setLanguage("");
                    }}
                    className=""
                  />
                )}
              </div>
              <div className="m-2">
                {rec.strInstructionsDE && language != "german" && (
                  <img
                    src={rigoImage10}
                    style={{
                      width: "60px",
                      height: "auto",
                      borderRadius: "40px",
                    }}
                    onClick={() => {
                      setLanguage("german");
                    }}
                    className=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className={colorButton == "buttonList" ? "button" : "buttonList"}
          onClick={function () {
            actions.addToShopingList(rec);
            setColorButton("button");
          }}
          style={{ width: "auto", height: "auto", margin: "10px" }}
        >
          Add to Shopping List
        </button>
        <Link to="/shopinglist">
          <button className={colorButton == "buttonList" ? "button" : "buttonList"} style={{ width: "auto", height: "auto", margin: "10px" }}>
            Check Your Shopping List
          </button>
        </Link>
        <Link to="/recipeBrowser" className="text-decoration-none">
          <button className="button " style={{ width: "auto", height: "auto", margin: "10px" }}>
            Search More Drinks!
          </button>
        </Link>
        {/* <input type='number' value='number' className="rounded-3" style={{ width: '5rem' }} ></input> */}
      </div>
    </div>
  );
};

Information.propTypes = {
  match: PropTypes.object,
};

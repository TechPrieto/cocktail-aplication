import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// idDrink: "11001"

export const FullCards = ({ data }) => {
    const { store, actions } = useContext(Context);
    const [icon, setIcon] = useState(false);
    const [addFav, setAddFav] = useState(0);
    const params = useParams();

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="card" style={{ minWidth: "18rem", maxWidth: "22rem", minHeight: "16rem", margin: '0.7rem', padding: '10px', boxShadow: '5px 10px 18px #6A5ADF' }}>
                <img src={data.value3} className="img-fluid rounded-start" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">strDrink:{data.value1}</h5>
                    <h2 className="card-text">strInstructions: {data.value2}</h2>
                    <p className="card-text">strIngredient1:{data.value4} </p>
                    <p className="card-text">strIngredient2:{data.value5} </p>
                    <p className="card-text">strIngredient3:{data.value6}</p>
                    <p className="card-text">strIngredient4:{data.value7} </p>
                    <p className="card-text">strMeasure1: {data.value8}</p>
                    <p className="card-text">strMeasure2: {data.value9}</p>
                    <p className="card-text">strMeasure3: {data.value10}</p>
                    <p className="card-text">strMeasure4{data.value11}</p>
                    {/* <p className="card-text">strTags: "IBA,Classic,Alcoholic,Expensive,Savory"</p>
                    <p className="card-text">strVideo: "https://www.youtube.com/watch?v=YsE_igrPXZs"</p>
                    <p className="card-text">strGlass: "Old-fashioned glass"</p>
                    <p className="card-text">strIBA: "Unforgettables"</p>
                    <p className="card-text">strCategory: "Cocktail"</p>
                    <p className="card-text">strAlcoholic: "Alcoholic"</p> */}
                </div>
            </div>
        </div>
    )
}

FullCards.propTypes = {
    match: PropTypes.object,
};




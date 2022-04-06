import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage11 from "../../img/id.png";
import rigoImage12 from "../../img/menu.png";
import rigoImage13 from "../../img/conc.png";

export const Bussines = ({ rec }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const getCourses= () => {
    fetch("https://www.udemy.com/api-2.0/courses/?search=bartender",  {
      "method": "GET",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic e2VDSjZaNEFPZlVnOHlsR0pxNlN5SXB6TWlzc3pzWm9KbUJQVkx2dVR9Ontwc3N3R1RVaGJWSHU1c0NaSXVlUlBtQnZYbHhjMTFsZjk3UkZjdEo4aUVGVWFxN3g3WUdUcnVoM041ZTZuOVIxdjdRaDJOMG96T3VZcVh4eUptVmszNjNjd0ltenZzQWVFRzg0ZlJuUDFURHNzUkpuaVNkV3Y4R3BDRzkwZXFiTH0=",
        "Content-Type": "application/json;charset=utf-8"
      }
    })

      .then(res=>{
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error(err);
      });

  }

  useEffect(() => {
    getCourses();
}, []);
  return (
    <div className="container">

      <div>
      <h1 className="text-center text-white">The secret formula for succes</h1>
      </div>
      <div className="row container d-flex justify-content-evenly col-sm-12">
    
       <div className=" col-sm-12 boxes border rounded  joshstyles"> 
       <img src={rigoImage13} style={{ width: '100px', height: 'auto' }} />
       <h2 className="bussinesh2">Good Recipes</h2>
         <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <Link to="/contacts"><button className="button-24">ask for service</button></Link>
       </div>
       <div className="col-sm-12 boxes border rounded joshstyles ">
       <img src={rigoImage12} style={{ width: '100px', height: 'auto' }} />
          <h2 className="bussinesh2">Concept</h2>
         <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <Link to="/contacts"><button className="button-24">ask for service</button></Link>
       </div>
       <div className="col-sm-12 boxes border rounded joshstyles" >
       <img src={rigoImage11} style={{ width: '100px', height: 'auto' }} />
       <h2 className="bussinesh2">Train Staff</h2>
       <p className="m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
         <Link to="/contacts"><button className="button-24">ask for service</button></Link>
       </div>
    </div>
    </div>
  );
};

Bussines.propTypes = {
  match: PropTypes.object,
};

// Identificación del cliente	eCJ6Z4AOfUg8ylGJq6SyIpzMisszsZoJmBPVLvuT
// Secreto de cliente	psswGTUhbVHu5sCZIueRPmBvXlxc11lf97RFctJ8iEFUaq7x7YGTruh3N5e6n9R1v7Qh2N0ozOuYqXxyJmVk363cwImzvsAeEG84fRnP1TDssRJniSdWv8GpCG90eqbL
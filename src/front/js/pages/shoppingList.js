import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { FullCards } from "./fullCards";
import { Cards } from "./cards";
import { Context } from "../store/appContext";

export const ShoppingList = ({ nose }) => {
  const { store, actions } = useContext(Context);
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  console.log("checkcheck", checked);

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const getfetchData = () => {
    fetch(
      "https://3001-prietobyte-cocktailaplic-hee7kwsvxwf.ws-us39a.gitpod.io/api/shoppinglist"
    )
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (list == null || undefined) {
      console.log("this is the list", list);
    }
    getfetchData();
  }, []);
  console.log("this is the list", list);
  // console.log("One To do", list[0]);

  // const names = list.map((drink) => {
  //   return drink.drink_name;
  // });

  // console.log(names); // ['John', 'Wayne', 'David']

  return (
    <div className="title text-center">
      <h1>Your Shopping List</h1>

      {list.length > 0 &&
        list.map((item, i) => {
          return (
            <div className="container">
              <div className="borderShopping m-5">
                <table>
                  <buttom
                    className="button"
                    onClick={() => actions.deleteList(list)}
                  >
                    delete recipe
                  </buttom>
                  <thead>
                    <tr>
                      <th className="text-center border-bottom border-dark w-100 ms-1">
                        <h3 key={i}>{item.strDrink}</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {item.ingredient_name.length > 0 &&
                      item.ingredient_name
                        .split(",")
                        .map((ingredient, index) => {
                          return (
                            <tr key={index}>
                              <td
                                className={`text-4xl ${
                                  checked[ingredient] ? "line-through" : ""
                                }`}
                              >
                                {ingredient}
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  name={ingredient}
                                  value={ingredient}
                                  onChange={handleChange}
                                />
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>

                {/* <h3  >{item.strDrink}</h3> */}
                {/* <ul>
                                                    {item.strIngredient1 ? <li>{item.strIngredient1}<input type="checkbox" /></li>: <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient2 ? <li>{item.strIngredient2}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient3 ? <li>{item.strIngredient3}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient4 ? <li>{item.strIngredient4}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient5 ? <li>{item.strIngredient5}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient6 ? <li>{item.strIngredient6}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient7 ? <li>{item.strIngredient7}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient8 ? <li>{item.strIngredient8}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient9 ? <li>{item.strIngredient9}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient10 ? <li>{item.strIngredient10}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient11 ? <li>{item.strIngredient11}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient12 ? <li>{item.strIngredient12}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient13 ? <li>{item.strIngredient13}</li> : <li style={{display:"none"}}>Hello</li>}
                                                    {item.strIngredient14 ? <li>{item.strIngredient14}</li> : <li style={{display:"none"}}>Hello</li>}
                                                </ul> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

ShoppingList.propTypes = {
  match: PropTypes.object,
};

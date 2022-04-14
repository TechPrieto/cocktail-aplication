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
      <h1 className="title text-center mt-5">Your Shopping List</h1>
      <p></p>

      {list.length > 0 &&
        list.map((item, i) => {
          return (
            <div className="container table-container">
              <div className="borderShopping m-5 list-group-item">
                <table className="table table-sm ">
                  <thead>
                    <tr>
                      <th className="text-center border-bottom border-dark w-100 ms-1">
                        <h3 key={i}>{item.drink_name}</h3>
                        <buttom
                          className="button my-2"
                          onClick={() => actions.deleteShoppingList(item.id)}
                        >
                          Delete recipe
                        </buttom>
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
                                  // onClick={actions.editShoppingList(item)}
                                />
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      <Link to="/recipeBrowser" className="text-decoration-none">
        <button
          className="button "
          style={{ width: "auto", height: "auto", margin: "10px" }}
        >
          Search More Drinks!
        </button>
      </Link>
    </div>
  );
};

ShoppingList.propTypes = {
  match: PropTypes.object,
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { FullCards } from "./fullCards";
import {Cards} from "./cards"
import { Context } from "../store/appContext";

export const ShoppingList = () => {
    const { store, actions } = useContext(Context);
    const [checked, setChecked] = useState(false)
    console.log('checkcheck', checked)

    const handleChange = (event) => {
        setChecked({...checked, [event.target.name] : event.target.checked});
    }
    return (
        <div className="" style={{color:"white"}}>
            <h1 color={"white"}>Your Shopping List</h1>
            
            {store.shopingList.map((item, i) => {
                                    return(
                                        <div className="container">
                                            <div className="borderShopping m-5">
                                                <table style={{width:"100%"}}>
                                                <thead>
                                                    <tr>
                                                        <th style={{width:"30%"}}><h3 key={i}>{item.strDrink}</h3></th>
                                                    </tr>
                                                </thead>
                                                <tbody >    
                                                    {item.strIngredient1 ? <tr><td className={`text-4xl ${(checked[item.strIngredient1])? 'line-through': ''}`} >{item.strIngredient1}</td><td><input type="checkbox" name={item.strIngredient1} value={item.strIngredient1} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient2 ? <tr><td className={`text-4xl ${(checked[item.strIngredient2])? 'line-through': ''}`} >{item.strIngredient2}</td><td><input type="checkbox" name={item.strIngredient2} value={checked.checkbox2} onChange={handleChange}   /></td></tr> : "" }   
                                                    {item.strIngredient3 ? <tr><td className={`text-4xl ${(checked[item.strIngredient3])? 'line-through': ''}`} >{item.strIngredient3}</td><td><input type="checkbox" name={item.strIngredient3} value={checked.checkbox3} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient4 ? <tr><td className={`text-4xl ${(checked[item.strIngredient4])? 'line-through': ''}`} >{item.strIngredient4}</td><td><input type="checkbox" name={item.strIngredient4} value={checked.checkbox4} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient5 ? <tr><td className={`text-4xl ${(checked[item.strIngredient5])? 'line-through': ''}`} >{item.strIngredient5}</td><td><input type="checkbox" name={item.strIngredient5} value={checked.checkbox5} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient6 ? <tr><td className={`text-4xl ${(checked[item.strIngredient6])? 'line-through': ''}`} >{item.strIngredient6}</td><td><input type="checkbox" name={item.strIngredient6} value={checked.checkbox6} onChange={handleChange}  /></td></tr> : "" }   
                                                    {item.strIngredient7 ? <tr><td className={`text-4xl ${(checked[item.strIngredient7])? 'line-through': ''}`} >{item.strIngredient7}</td><td><input type="checkbox" name={item.strIngredient7} value={checked.checkbox7} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient8 ? <tr><td className={`text-4xl ${(checked[item.strIngredient8])? 'line-through': ''}`} >{item.strIngredient8}</td><td><input type="checkbox" name={item.strIngredient8} value={checked.checkbox8} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient9 ? <tr><td className={`text-4xl ${(checked[item.strIngredient9])? 'line-through': ''}`} >{item.strIngredient9}</td><td><input type="checkbox" name={item.strIngredient9} value={checked.checkbox9} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient10 ? <tr><td className={`text-4xl ${(checked[item.strIngredient10])? 'line-through': ''}`} >{item.strIngredient10}</td><td><input type="checkbox" name={item.strIngredient10} value={checked.checkbox10} onChange={handleChange}  /></td></tr> : "" }   
                                                    {item.strIngredient11 ? <tr><td className={`text-4xl ${(checked[item.strIngredient11])? 'line-through': ''}`} >{item.strIngredient11}</td><td><input type="checkbox" name={item.strIngredient11} value={checked.checkbox11} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient12 ? <tr><td className={`text-4xl ${(checked[item.strIngredient12])? 'line-through': ''}`} >{item.strIngredient12}</td><td><input type="checkbox" name={item.strIngredient12} value={checked.checkbox12} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient13 ? <tr><td className={`text-4xl ${(checked[item.strIngredient13])? 'line-through': ''}`} >{item.strIngredient13}</td><td><input type="checkbox" name={item.strIngredient13} value={checked.checkbox13} onChange={handleChange}  /></td></tr> : "" }
                                                    {item.strIngredient14 ? <tr><td className={`text-4xl ${(checked[item.strIngredient14])? 'line-through': ''}`} >{item.strIngredient14}</td><td><input type="checkbox" name={item.strIngredient14} value={checked.checkbox14} onChange={handleChange}  /></td></tr> : "" }     
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


                                    )
                                   
                                })}
            
            
        </div>
    );
};
                    

				
					
                    











ShoppingList.propTypes = {
    match: PropTypes.object
};

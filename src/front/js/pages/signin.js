import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/login1.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SignIn = () => {
	// useEffect(()=>{
	//   alert (" WELCOME! YOUR REGISTER HAVE BEEN SUCCED ");  
	// }  
	// ,[])
 
	const { store, actions } = useContext(Context);
	const [logInValues, setLogInValues ] = useState({
		email: "",
		password: "",
	});
	return (
		<div className="container border rounded border-danger bg-dark mt-4 mb-4 joshstyles" style={{ width: '500px', height: 'auto' }}>
			<img className="rounded mx-auto d-block" src={rigoImage} style={{ width: '400px', height: 'auto' }} />
			<div className="container px-5">
				<form id="contactForm">
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={logInValues.email} onChange={(e)=> setLogInValues({...logInValues,email:e.target.value}) } className="form-control" id="emailAddress" type="text" placeholder="Email Address" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
					</div>
					<div className="mb-3 mx-auto" style={{ width: '400px', height: 'auto' }}>
						<input value ={logInValues.password} onChange={(e)=> setLogInValues({...logInValues,password:e.target.value}) }  className="form-control" id="password" type="password" placeholder="Password" data-sb-validations="required" />
						<div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
					</div>
					<div className="d-grid mx-auto mb-3" style={{ width: '400px', height: 'auto' }}>
					<Link to="recipebrowser">
					<span onClick={()=> actions.LogInUsers(logInValues)} className="button btn-lg " type='text' style={{backgroundColor: '#C1436D', border: 'none'}} id="submitButton">Submit</span>
					</Link>
					</div>
				</form>
			</div>
			
		</div>
	);
	
};

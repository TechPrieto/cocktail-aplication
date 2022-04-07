import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid ">
				<Link to="/" className="logo">
					<h6 className="logolinea navbar-brand">The Drink Link</h6>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-xs-block">
						<li className="nav-item ms-auto">

							<nav className="navbar m-2">
								{store.loggId.email && <ul className="navbar-nav ">
									<li className="nav-item dropdown">
										<button
											className="button nav-link dropdown-toggle"
											href="#"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											favorites {store.favorites.length}
										</button>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
											{store.favorites.map((fav, i) => {
												return (
													<li key={i}>
														<Link to={{ pathname: "information/" + fav.strDrink, state: fav }}>{fav.strDrink}</Link>
														<i
															className="fas fa-trash-alt m-2"
															onClick={() => actions.deleteFav(fav)}
														></i>
													</li>
												);
											})}
										</ul>
									</li>
								</ul>}
								<Link to="/register" className="logo">
									<h5 className="m-2 logolinea " style={{ color: '#0F0C24' }}>Register</h5>
								</Link>
								{store.loggId.email ? <h5 className="m-1 logolinea " onClick={() => actions.logOut()} style={{ color: '#0F0C24' }}>LogOut</h5> : <Link to="/signin" className="logo">
									<h5 className="m-1 logolinea " style={{ color: '#0F0C24' }}>Login</h5>
								</Link>}
							</nav>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

{/* <div className="col-4">
	<Link to="/">
		<h6 className="m-3">Cheers & Share</h6>
	</Link>
</div>
<div className="d-flex col-8 justify-content-end">

	<nav className="navbar m-2">
		<Link to="/register">
				<button className="button m-2">Register</button>
		</Link>
		<Link to="/signin">
				<button className="button m-2">Login</button>
		</Link>
		
	</nav>
</div> */}
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage14 from "../../img/Contact.png";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container border rounded border-danger bg-dark mt-4 mb-4 joshstyles" style={{ width: '800px', height: 'auto' }}>
			<div className="d-flex justify-content-center ms-3">
				<div className="mt-4">
					<img src={rigoImage14} style={{ width: '400px', height: 'auto' }} />
				</div>

				<div className="rigth m-5 me-3">

					<div className="m-5 " style={{ width: '250px', height: 'auto' }}>
						<input className="form-control" id="password" type="text" placeholder="Name"></input>
					</div>
					<div className="m-5" style={{ width: '250px', height: 'auto' }}>
						<input className="form-control" id="password" type="text" placeholder="Email Address"></input>
					</div>

					<div className="m-5" >
						<div class="form-floating">
							<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ width: '250px', height: '100px' }}></textarea>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
};

Contacts.propTypes = {
	match: PropTypes.object
};

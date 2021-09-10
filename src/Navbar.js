import React from "react";
import "./index.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function NavbarTop(props) {
	return (
		<div>
			<Navbar fixed="top" className=" margin-left p-2 bg-light purple">
				<Nav className="me-auto  d-flex mx-3 align-content-around flex-row">
					<LinkContainer to="/" exact>
						<Nav.Link className="my-link px-2">My Profile</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/order">
						<Nav.Link className="my-link mx-3 px-2">
							My Order
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavbarTop;

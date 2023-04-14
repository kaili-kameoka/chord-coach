import { Outlet } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";

const Root = () => {
	return (
			<Container className={'vh-100 d-flex flex-column justify-content-center'}>
				<Outlet />
			</Container>
	)
}

export default Root;
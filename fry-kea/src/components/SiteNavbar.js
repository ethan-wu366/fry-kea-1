import * as React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavbarLogo from '../img/frykea-logo.png';

const SiteNavbar = (props) => {

	return (
		<Navbar
			expand="lg"
			style={{
				padding: '.8rem 2rem .8rem 2rem',
				minHeight: '10vh',
				background: '#1c1c1c',
			}}
			variant="dark"
			className="siteNavbar text-center"
			id="siteNavbar"
		>
			<Navbar.Brand>
				<a href="/">
					<img
						src={NavbarLogo}
						alt="navbar logo"
						className="selectDisable"
						style={{
							width: '4rem',
						}}
					/>
				</a>
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
			/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	NavText: {
		fontFamily: 'Overpass',
		margin: '0 1rem',
		fontSize: '22px',
	},
};

export default SiteNavbar;

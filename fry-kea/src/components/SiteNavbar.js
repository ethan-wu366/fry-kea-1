import * as React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavbarLogo from '../img/frykea-logo.png';
import Facebook from '../img/facebook-logo.png';
import Instagram from '../img/instagram-logo.png';

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
				<a href="https://cdn.discordapp.com/attachments/710310738438389823/824017795742040154/mouse_be_vibing.mp4">
					<img
						src={NavbarLogo}
						alt="navbar logo"
						className="selectDisable"
						style={{
							width: '5rem',
						}}
					/>
				</a>
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
			/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto d-flex flex-column">
					<a href="https://cdn.discordapp.com/attachments/830886766970011649/856564979578306602/wait_what.png">
						<p style={style.NavText}>Mon-Mon:  9:00:000 AM - 173:0</p>
					</a>
					<div className="d-flex flex-row">
					<a href="https://cdn.discordapp.com/attachments/830886766970011649/845215406435336192/how_to_trick_a_monkey.png">
						<p style={style.NavText}>Call Us: 000-Never</p>
					</a>
					<a href="https://www.facebook.com/ethan.wu.366/">
						<img
							src={Facebook}
							alt="facebook logo"
							className="selectDisable"
							style={{
								width: '1rem',
							}}
						/>
					</a>
					<a href="https://www.instagram.com/majik366/">
						<img
							src={Instagram}
							alt="insta logo"
							className="selectDisable"
							style={{
								width: '1rem',
								top: '-1rem',
							}}
						/>
					</a>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	NavText: {
		fontFamily: 'Overpass',
		margin: '0 .51rem',
		fontSize: '10px',
	},
};

export default SiteNavbar;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo_W.PNG';
import * as IoIcon from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="nav-menu">
			<NavLink
				className="nav-logo"
				exact
				activeStyle={{ color: 'red' }}
				to="/"
			>
				<img src={logo} alt="" width="60" height="50" />
			</NavLink>

			<NavLink exact activeStyle={{ color: 'red' }} to="/shop">
				Shop
			</NavLink>

			<NavLink exact activeStyle={{ color: 'red' }} to="/about">
				About
			</NavLink>

			{/* {userInfo ? () : () } */}

			<NavLink exact activeStyle={{ color: 'red' }} to="/cart">
				<IoIcon.IoCart />
			</NavLink>

			<NavLink exact activeStyle={{ color: 'red' }} to="/profile">
				<IoIcon.IoPerson />
			</NavLink>

			{/* ******* logout event will removes the user-info cookie ****/}

			<NavLink to="/">Logout</NavLink>

			<NavLink to="/login">Login</NavLink>
		</div>
	);
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav>
		<div><Link to="/">Home!</Link></div>
		<div><Link to="/contact">Contact!</Link></div>
	</nav>
);

export default Nav;

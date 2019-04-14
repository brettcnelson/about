import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<NavLink className="Link" activeClassName="active" exact={true} to="/"><img src="favicon.ico" alt=""/></NavLink>
			<NavLink className="Link" activeClassName="active" to="/portfolio"><span>Portfolio</span></NavLink>
			<NavLink className="Link" activeClassName="active" to="/contact"><span>Contact</span></NavLink>
			<NavLink className="Link" activeClassName="active" to="/resume"><span>Resume</span></NavLink>
		</nav>
	);
}

export default Nav;

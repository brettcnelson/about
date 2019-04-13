import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({path}) => {
	return (
		<nav>
			<Link to="/" style={{alignSelf:'center'}}><img src="favicon.ico" alt=""/></Link>
			<Link to="/" style={{alignSelf:'center',color:'#f18000'}}>Home</Link>
			<Link to="/contact" style={{alignSelf:'center',color:'#f18000'}}>Contact</Link>
		</nav>
	);
}

export default Nav;

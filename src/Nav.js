import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav>
		<div><Link to="/">Projects!</Link></div>
		<div><Link to="/contact">Contac!t</Link></div>
	</nav>
);

export default Nav;

	// <nav className="Nav">
	// 	<div className="nav-link"><Link to='/'><code>root</code></Link></div>
	// 	<div className="nav-link"><Link to='/list'><code>/list</code></Link></div>
	// </nav>
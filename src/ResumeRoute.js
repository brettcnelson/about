import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import Resume from './Resume';

const ResumeRoute = () => {
	return (
		<div>
			<Nav />
			<NavLink className="Link" activeClassName="active" to="/print" target="_blank"><button>print/download</button></NavLink>
			<Resume/>
		</div>
	);
}

export default ResumeRoute;

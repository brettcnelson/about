import React from 'react';
import './Projects.scss';
import projects from './portfolio';
import { NavLink } from 'react-router-dom';

const Projects = () => {
	return (
		<div>
			<h1 className="phead">Portfolio</h1>
			<div className="projectcon">
				{projects.map((p,i) => (
					<div key={i} className="project">
						<p>{p.name}</p>
						<img className="projectimg" src={p.pic} alt=""/>
						<NavLink to={"/portfolio/"+p.name}><button className="links">details</button></NavLink>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss';
import projects from './portfolio';
import { fonts } from './fontawesome';

const link = (l,i) => (
	<a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
		<button>
			<i className={fonts[l.name]}></i> {l.name}
		</button>
	</a>
);

export default () => (
	<div className="portfolio">
		<h1 className="lg-heading">Portfolio</h1>
		<div className="projects">
			{projects.map((p,i) => (
				<div key={i} className="project">
					<h3>{p.name}</h3>
					<h4>{p.desc}</h4>
					<img src={p.pic} alt={p.name}/>
					<Link to={`/portfolio/${p.name}`}>
						<button>
							<i className={fonts.details}></i> Details
						</button>
					</Link>
					{p.links.map(link)}
				</div>					
			))}
		</div>
	</div>
);

// {<div>
// 	<h1 className="phead">Portfolio</h1>
// 	<div className="projectcon">
// 		{projects.map((p,i) => (
// 			<div key={i} className="project">
// 				<p>{p.name}</p>
// 				<img className="projectimg" src={p.pic} alt=""/>
// 				<NavLink to={"/portfolio/"+p.name}><button className="links">details</button></NavLink>
// 			</div>
// 		))}
// 	</div>
// </div>}
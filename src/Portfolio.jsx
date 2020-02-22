import React from 'react';
import { NavLink } from 'react-router-dom';
import './Portfolio.scss';
import projects from './portfolio';

const Portfolio = () => {
	return (
		<div className="portfolio">
			<h1 className="lg-heading">Portfolio</h1>
			<div className="projects">
				{projects.map((p,i) => (
					<div key={i} className="project">
						<NavLink to={`/portfolio/${p.name}`}>
							<button>
								<i className="fas fa-info-circle"></i> Details
							</button>
						</NavLink>
						<a href={p.code}>
							<button>
								<i className="fab fa-github"></i> GitHub
							</button>
						</a>
						<img src={p.pic} alt={p.name}/>
						{p.url ? (
							<a href={p.url}>
								<button>
									<i className="fas fa-globe"></i> Site
								</button>
							</a>) : (
							<div></div>			
							)
						}
					</div>					
				))}
			</div>
		</div>
	);
}

export default Portfolio;



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
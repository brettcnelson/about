import React from 'react';
import './Projects.css';

const projects = [
	{
		name: 'Fullstack React Boilerplate',
		pic:'rfsb.png',
		url:'https://fullstack-react-boilerplate.herokuapp.com/',
		code:'https://github.com/brettcnelson/react-fullstack-boilerplate'
	},
	{
		name: 'Trivial Conquest',
		pic:'rfsb.png',
		url:'https://intense-journey-25938.herokuapp.com',
		code:'https://github.com/trivial-conquest/trivial-conquest'
	},
	{
		name: 'Dark Sky Weather New Tab Page',
		pic:'dsnt.jpg',
		url:'https://chrome.google.com/webstore/detail/weather-widget-new-tab-pa/fecpjkhachlmnblhbmfldinkhfjeckkd',
		code:'https://github.com/brettcnelson/dark-sky-new-tab'
	},
	{
		name: 'Machine Learning Tic-Tac-Toe',
		pic:'dsnt.jpg',
		url:'https://auto-tic.herokuapp.com/',
		code:'https://github.com/brettcnelson/auto-tic'
	},
	{
		name: 'Sudoku Solver',
		pic:'dsnt.jpg',
		url:'https://auto-sudoku.herokuapp.com/',
		code:'https://github.com/brettcnelson/sudoku-solver'
	}
];

const Projects = () => {
	return (
		<div>
			<h1 className="phead">Portfolio</h1>
			<div className="projectcon">
				{projects.map((p,i)=><div key={i} className="project">
					<p>{p.name}</p>
					<img className="projectimg" src={p.pic} alt=""/>
					<p className="projectlinkscon">
						<a className="links" href={p.url} target="_blank" rel="noopener noreferrer" style={{marginRight:'1em'}}>URL</a>
						<a className="links" href={p.code} target="_blank" rel="noopener noreferrer" style={{marginLeft:'1em'}}><code>CODE</code></a>
					</p>
				</div>)}
			</div>
		</div>
	);
}

export default Projects;

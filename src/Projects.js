import React from 'react';
import './Projects.css';

const Projects = () => {
	const projects = [
		{
			name: 'React Fullstack Boilerplate',
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
			url:'https://chrome.google.com/webstore/detail/dark-sky-weather-new-tab/fecpjkhachlmnblhbmfldinkhfjeckkd',
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
	return (
		<div>
			<h1 className="phead">Projects</h1>
			<div className="projectcon">
				{projects.map((p,i)=><div key={i} className="project">
					<p>{p.name}</p>
					<img className="projectimg" src={p.pic} alt=""/>
					<p className="projectlinks">
						<a href={p.url} target="_blank" rel="noopener noreferrer" style={{marginRight:'1em'}}>url</a>
						<a href={p.code} target="_blank" rel="noopener noreferrer" style={{marginLeft:'1em'}}><code>code</code></a>
					</p>
				</div>)}
			</div>
		</div>
	);
}

export default Projects;

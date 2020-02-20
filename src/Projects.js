import React from 'react';
import './Projects.css';
import Nav from './Nav';

const projects = [
	{
		name: 'Fullstack React Boilerplate',
		pic:'images/rfsb.png',
		url:'https://fullstack-react-boilerplate.herokuapp.com/',
		code:'https://github.com/brettcnelson/react-fullstack-boilerplate'
	},
	{
		name: 'Trivial Conquest',
		pic:'images/rfsb.png',
		url:'https://intense-journey-25938.herokuapp.com',
		code:'https://github.com/trivial-conquest/trivial-conquest'
	},
	{
		name: 'Dark Sky Weather New Tab Page',
		pic:'images/dsnt.jpg',
		url:'https://chrome.google.com/webstore/detail/weather-widget-new-tab-pa/fecpjkhachlmnblhbmfldinkhfjeckkd',
		code:'https://github.com/brettcnelson/dark-sky-new-tab'
	},
	{
		name: 'Machine Learning Tic-Tac-Toe',
		pic:'images/dsnt.jpg',
		url:'https://auto-tic.herokuapp.com/',
		code:'https://github.com/brettcnelson/auto-tic'
	},
	{
		name: 'Sudoku Solver',
		pic:'images/dsnt.jpg',
		url:'https://auto-sudoku.herokuapp.com/',
		code:'https://github.com/brettcnelson/sudoku-solver'
	},
  {
    name: 'Sort Algorithm Animator',
    pic:'images/dsnt.jpg',
    url:'https://sort.brettcnelson.site',
    code:'https://repl.it/@brettcnelson/sort-algos'
  },
  {
    name: 'Mithril Test',
    pic:'images/dsnt.jpg',
    url:'https://thawing-waters-90525.herokuapp.com/',
    code:'https://github.com/brettcnelson/mithril-test'
  },
  {
    name: 'Minimal Framework',
    pic:'images/dsnt.jpg',
    code:'https://github.com/brettcnelson/MinimalFramework'
  }
];

const Projects = () => {
	return (
		<div>
			<Nav/>
			<h1 className="phead">Portfolio</h1>
			<div className="projectcon">
				{projects.map((p,i)=><div key={i} className="project">
					<p>{p.name}</p>
					<img className="projectimg" src={p.pic} alt=""/>
					<p>
						<a href={p.url} target="_blank" rel="noopener noreferrer" style={{marginRight:'1em'}}><button className="links">url</button></a>
						<a href={p.code} target="_blank" rel="noopener noreferrer" style={{marginLeft:'1em'}}><button className="links"><code>code</code></button></a>
					</p>
				</div>)}
			</div>
		</div>
	);
}

export default Projects;

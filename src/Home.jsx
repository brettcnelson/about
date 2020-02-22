import React from 'react';
import './Home.scss';
import icons from './Icons.jsx';

const Home = () => {
	document.body.classList.remove('full-background','main-background');
	document.body.classList.add('full-background');
	return (
		<main className="home">
			<h1 className="lg-heading">
				Brett <span className="text-two">Nelson</span>
			</h1>
			<h2 className="sm-heading">Software Engineer</h2>
			<div className="icons">{icons()}</div>
		</main>
	);
}

export default Home;

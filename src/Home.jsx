import React from 'react';
import './Home.scss';
import { IconList } from './fontawesome';


export default () => {
	document.body.classList.remove('full-background','main-background');
	document.body.style.background = `url('${process.env.PUBLIC_URL}/images/background.jpg')`;
	document.body.classList.add('full-background');
	return (
		<main className="home">
			<h1 className="lg-heading">
				Brett <span className="text-two">Nelson</span>
			</h1>
			<h2 className="sm-heading">Software Engineer</h2>
			<div className="icons">{IconList()}</div>
		</main>
	);
}

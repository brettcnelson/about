import React from 'react';
import './Home.scss';

const icons = () => (
	[
		{
		href: "http://github.com/brettcnelson",
		class: 'fab fa-github'
		},
		{
		href: "mailto:brettcnelson@gmail.com",
		class: 'fas fa-envelope'
		},
		{
		href: "http://linkedin.com/in/brettcnelson",
		class: 'fab fa-linkedin'
		},
		{
		href:'https://twitter.com/_brettcnelson',
		class: 'fab fa-twitter'
		},
		{
		href: "https://dev.to/brettcnelson",
		class: 'fab fa-dev'
		}
	].map((i,j) => (
		<a href={i.href} key={j}>
			<i className={i.class+' fa-2x'}></i>
		</a>
	))
);

const Landing = () => {
	return (
    <main className="home">
		<h1 className="lg-heading">
			Brett <span className="text-two">Nelson</span>
		</h1>
		<h2 className="sm-heading">Software Engineer</h2>
		<div className="icons">
			{icons()}
		</div>
	</main>
	);
}

export default Landing;

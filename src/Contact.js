import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div>
			<span>resume:</span>
			<Link to="/resume">view</Link>
			<a href='resume.pdf' download={true}><span>download</span></a>
		</div>
	);
}

export default Contact;

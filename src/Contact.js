import React from 'react';
import './Contact.css';

const contacts = [
	{
		href: "mailto:brettcnelson@gmail.com",
		src: "images/emailBig.png"
	},
	{
		href: "http://github.com/brettcnelson",
		src: "images/githubBig.png"
	},
	{
		href: "http://linkedin.com/in/brettcnelson",
		src: "images/linkedinBig.png"
	}
];

const Contact = () => {
	return (
		<div className="contactcon">
			{contacts.map(({ href,src }, i) => (<div key={i}>
				<a className="contactlink" href={href} target='_blank' rel="noopener noreferrer" >
					<img className="contactimg" src={src} alt=""/>
				</a>
			</div>))}
		</div>
	);
}

export default Contact;

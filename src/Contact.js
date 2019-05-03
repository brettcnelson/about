import React from 'react';
import './Contact.css';

const contacts = [
	{
		href: "mailto:brettcnelson@gmail.com",
		src: "images/emailBig.png"
	},
	{
		href: "http://github.com/brettcnelson",
		src: "images/GitHub-Mark-120px-plus.png"
	},
	{
		href: "https://dev.to/brettcnelson",
		src: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
		alt: "dev.to/brettcnelson"
	},
	{
		href: "http://linkedin.com/in/brettcnelson",
		src: "images/linkedinBig.png"
	}
];

const Contact = () => {
	return (
		<div className="contactcon">
			{contacts.map(({ href,src,alt }, i) => (<div key={i}>
				<a className="contactlink" href={href} target='_blank' rel="noopener noreferrer" >
					<img className="contactimg" src={src} alt={alt}/>
				</a>
			</div>))}
		</div>
	);
}

export default Contact;

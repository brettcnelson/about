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
		src: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
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

// <a href="https://dev.to/brettcnelson">
//   <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Brett Nelson's DEV Profile" height="30" width="30" />
// </a>
import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div style={{padding:'5%',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',textAlign:'center'}}>
			<div className="contactlink" >
				<a href="mailto:brettcnelson@gmail.com" target="_blank">
					<img className="contactimg" src="images/emailBig.png" />
				</a>
			</div>
			<div>
				<a className="contactlink" href='http://github.com/brettcnelson' target='_blank'>
					<img className="contactimg" src="images/githubBig.png" />
				</a>
			</div>
			<div>
				<a className="contactlink" href='http://linkedin.com/in/brettcnelson' target='_blank'>
					<img className="contactimg" src="images/linkedinBig.png" />
				</a>
			</div>
		</div>
	);
}

export default Contact;

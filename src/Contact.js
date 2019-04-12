import React from 'react';

const Contact = () => {
	return (
		<div>
			<span>resume:</span>
			<a href="/resume"><span>view</span></a>
			<a href='resume.pdf' download={true}><span>download</span></a>
		</div>
	);
}

export default Contact;

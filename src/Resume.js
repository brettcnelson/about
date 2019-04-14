import React from 'react';

const Resume = () => (
	<object data="resume.pdf" type="application/pdf" style={{width:'100%',height:'100vh'}}>
		<a href="resume.pdf" download={true}>download my resume</a>
	</object>
);

export default Resume;

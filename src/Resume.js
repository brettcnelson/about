import React from 'react';

const Resume = () => (
	<object data="Brett_Nelson_resume.pdf" type="application/pdf" style={{margin:'0px',padding:'0px',width:'100%',height:'100vh'}}>
		<h3 style={{textAlign:'center'}}>Your browser can't display PDFs</h3>
		<a href='Brett_Nelson_resume.pdf' download={true} style={{textDecoration:'none',color:'var(--textcolor)'}}>
			<button style={{width:'50%',marginLeft:'25%'}}>Download My Resume</button>
		</a>
	</object>
);

export default Resume;

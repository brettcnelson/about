import React from 'react';
// import './Landing.css';

const Landing = () => {
	return (
		<div style={{textAlign:'center'}}>
			<h1>Landing</h1>
			<a href='https://drive.google.com/uc?export=download&id=1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp' style={{textDecoration:'none',color:'var(--textcolor)'}}>
				<button style={{padding:'20px',borderRadius:'10%'}}>Download My Resume</button>
			</a>
		</div>
	);
}

export default Landing;
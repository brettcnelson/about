import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<NavLink className="Link" activeClassName="active" exact={true} to="/"><img src="favicon.ico" alt=""/></NavLink>
			<NavLink className="Link" activeClassName="active" to="/portfolio"><span>Portfolio</span></NavLink>
			<NavLink className="Link" activeClassName="active" to="/contact"><span>Contact</span></NavLink>
			<a className="Link" target='_blank' href='https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view'><span>Resume</span></a>
		</nav>
	);
}

export default Nav;

// {'Resum\xE9'}
// <NavLink className="Link" activeClassName="active" to="/resume"><span>Resume</span></NavLink>
// const Resume = () => (
// 	<object data="Brett_Nelson_resume.pdf#view=FitH" type="application/pdf" style={{width:'100%',height:'100vh'}}>
// 		<h3 style={{textAlign:'center'}}>Your browser can't display PDFs</h3>
// 		<a href='Brett_Nelson_resume.pdf' download={true} style={{textDecoration:'none',color:'var(--textcolor)'}}>
// 			<button style={{width:'50%',marginLeft:'25%'}}>Download My Resume</button>
// 		</a>
// 	</object>
// );
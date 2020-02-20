import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<NavLink className="Link" activeClassName="active" exact={true} to="/"><span>Portfolio</span></NavLink>
			<NavLink className="Link" activeClassName="active" to="/contact"><span>Contact</span></NavLink>
			<NavLink className="Link" activeClassName="active" to="/resume"><span>Resume</span></NavLink>
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

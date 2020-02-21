import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}
	toggleMenu() {
		const showMenu = !this.state.showMenu;
		this.setState({showMenu});
	}
	render() {
		const [close,show] = this.state.showMenu ? [' close',' show'] : ['',''];
		return (
			<header>
				<div className={`nav-btn${close}`} onClick={()=>this.toggleMenu()}>
					<div className="nav-line"></div>
					<div className="nav-line"></div>
					<div className="nav-line"></div>
				</div>
				<nav className={`nav${show}`}>
					<div className={`nav-left${show}`}>
						<div className={`logo${show}`}></div>
					</div>
					<ul className={`nav-right${show}`}>
						<li className={`nav-item${show}`}><NavLink className="nav-link" activeClassName="active" exact={true} to="/" onClick={()=>this.toggleMenu()}>Home</NavLink></li>
						<li className={`nav-item${show}`}><NavLink className="nav-link" activeClassName="active" to="/info" onClick={()=>this.toggleMenu()}>Info</NavLink></li>
						<li className={`nav-item${show}`}><NavLink className="nav-link" activeClassName="active" to="/portfolio" onClick={()=>this.toggleMenu()}>Portfolio</NavLink></li>
					</ul>
				</nav>
			</header>
		)
	}
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

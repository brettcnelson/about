import React from 'react';
import { Redirect } from 'react-router-dom';
import projects from './portfolio';

const Project = ({match:{params:{id}}}) => {
	const current = projects.find(p=>p.name === id);
	return !current ? (
		<Redirect to="/portfolio" />) : (
		<pre><code>
			{JSON.stringify(current,null,2)}
		</code></pre>
	);
}

export default Project;

//         <section className="projects box">
//           <div className="title">Software Engineering Projects</div>
//           {projects.map(project)}
//         </section>
//   function project(p,i) {
//     return (
//       <section key={i}>
//         <span className="entry">{p.name}</span> (<a href={p.code}  target="_blank" rel="noopener noreferrer">link</a>)
//         <div className="desc">{p.desc}</div>
//         <ul>{p.points.map((p,i)=><li key={i}>{p}</li>)}</ul>
//       </section>
//     );
//   }

import React from 'react';
import projects from './portfolio';

const Project = ({match:{params:{id}}}) => {
	document.body.classList.remove('full-background','main-background');
	document.body.classList.add('main-background');
	const current = projects.find(p=>p.name === id);
	return (
		<pre><code>
			{JSON.stringify(current,null,2)}
		</code></pre>
	);
}

export default Project;

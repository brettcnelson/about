import React from 'react';
import projects from './portfolio';

const Project = (props) => {
	const current = projects.find(p=>p.name === props.match.params.id);
	return (
		<pre><code>
			{JSON.stringify(current,null,2)}
		</code></pre>
	);
}

export default Project;

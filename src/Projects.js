import React from 'react';

const Projects = () => {
	let id = 1;
	return (
		<div>projects
			{Array.from({length:100},()=><div key={id++}>test</div>)}
		</div>
	);
}

export default Projects;

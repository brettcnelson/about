import React from 'react';
import './Info.scss';

const Info = () => {
  document.body.classList.remove('full-background','main-background');
	document.body.classList.add('main-background');
  return (
    <main>Info</main>
  );
}

export default Info;

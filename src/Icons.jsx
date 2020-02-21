import React from 'react';
import './Icons.scss';

const icons = [
  {
    href: "https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view",
    class: 'far fa-file'
  },
  {
    href: "http://github.com/brettcnelson",
    class: 'fab fa-github'
  },
  {
    href: "mailto:brettcnelson@gmail.com",
    class: 'fas fa-envelope'
  },
  {
    href: "http://linkedin.com/in/brettcnelson",
    class: 'fab fa-linkedin'
  },
  {
    href:'https://twitter.com/_brettcnelson',
    class: 'fab fa-twitter'
  },
  {
    href: "https://dev.to/brettcnelson",
    class: 'fab fa-dev'
  }
];

const Icons = () => {
	return (
    <div className="icons">
      {icons.map((i,j) => (
        <a href={i.href} key={j} target="_blank" rel="noopener noreferrer">
          <i className={i.class+' fa-2x'}></i>
        </a>
      ))}
		</div>
	);
}

export default Icons;

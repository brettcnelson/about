import React from 'react';

const icons = [
  {
    text: 'Resume',
    href: "https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view",
    class: 'far fa-file'
  },
  {
    text: 'GitHub',
    href: "http://github.com/brettcnelson",
    class: 'fab fa-github'
  },
  {
    text: 'Email',
    href: "mailto:brettcnelson@gmail.com",
    class: 'fas fa-envelope'
  },
  {
    text: 'LinkedIn',
    href: "http://linkedin.com/in/brettcnelson",
    class: 'fab fa-linkedin'
  },
  {
    text: 'Twitter',
    href:'https://twitter.com/_brettcnelson',
    class: 'fab fa-twitter'
  },
  // {
  //   text: 'DEV',
  //   href: "https://dev.to/brettcnelson",
  //   class: 'fab fa-dev'
  // }
];

export default (text) => (
	icons.map((i,j) => (
    <a className="box" href={i.href} key={j} target="_blank" rel="noopener noreferrer">
      <i className={i.class+' fa-2x'} title={text?undefined:i.text}></i>
      {text && <span>{' '+i.text}</span>}
    </a>
  ))
);

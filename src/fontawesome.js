import React from 'react';

const size = ' fa-2x';

const fonts =  {
  details:'fas fa-info-circle'+size,
  GitHub:'fab fa-github'+size,
  Site:'fas fa-globe'+size,
  'Chrome Extension':'fab fa-chrome'+size,
  // YouTube:'fab fa-youtube'+size,
  file:'far fa-file'+size,
  email:'fas fa-envelope'+size,
  linkedin:'fab fa-linkedin'+size,
  twitter:'fab fa-twitter'+size,
  dev:'fab fa-dev'+size
}

const icons = [
  {
    text: 'Resumé',
    href: "https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view",
    class: fonts.file
  },
  {
    text: 'GitHub',
    href: "http://github.com/brettcnelson",
    class: fonts.GitHub
  },
  {
    text: 'Email',
    href: "mailto:brettcnelson@gmail.com",
    class: fonts.email
  },
  {
    text: 'LinkedIn',
    href: "http://linkedin.com/in/brettcnelson",
    class: fonts.linkedin
  },
  {
    text: 'Twitter',
    href:'https://twitter.com/_brettcnelson',
    class: fonts.twitter
  },
  // {
  //   text: 'DEV',
  //   href: "https://dev.to/brettcnelson",
  //   class: fonts.dev
  // }
];

const IconList = (text) => (
  icons.map((i,j) => (
    <a className="box" href={i.href} key={j} target="_blank" rel="noopener noreferrer">
      <i className={i.class} title={text?undefined:i.text}></i>
      {text && <span>{' '+i.text}</span>}
    </a>
  ))
);

export { fonts, IconList };

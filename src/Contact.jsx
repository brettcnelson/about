import React from 'react';
import './Contact.scss';

const contacts = [
  {
    href: "http://github.com/brettcnelson",
    src: "images/GitHub-Mark-120px-plus.png"
  },
  {
    href: "mailto:brettcnelson@gmail.com",
    src: "images/email.png"
  },
  {
    href: "http://linkedin.com/in/brettcnelson",
    src: "images/linkedinBig.png"
  },
  {
    href:'https://twitter.com/_brettcnelson',
    src:'images/twitter.png'
  },
  {
    href: "https://dev.to/brettcnelson",
    src: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
    alt: "dev.to/brettcnelson"
  }
];

const Contact = () => {
  return (
    <div>
      <div className="contactcon">
        {contacts.map(({ href,src,alt }, i) => (<div className="contact" key={i}>
          <a className="contactlink" href={href} target='_blank' rel="noopener noreferrer" >
            <img className="contactimg" src={src} alt={alt}/>
          </a>
        </div>))}
      </div>
    </div>
  );
}

export default Contact;

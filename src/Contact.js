import React from 'react';
import './Contact.css';

const contacts = [
  {
    href: "http://github.com/brettcnelson",
    src: "images/GitHub-Mark-120px-plus.png"
  },
  {
    href: "https://dev.to/brettcnelson",
    src: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
    alt: "dev.to/brettcnelson"
  },
  {
    href: "mailto:brettcnelson@gmail.com",
    src: "images/email.png"
  },
  {
    href:'https://twitter.com/_brettcnelson',
    src:'images/twitter.png'
  },
  {
    href:'https://www.youtube.com/channel/UC2K4JNW9KtgzQ1bZkdN7X3g',
    src:'images/yt_logo_mono_light.png'
  },
  {
    href: "http://linkedin.com/in/brettcnelson",
    src: "images/linkedinBig.png"
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

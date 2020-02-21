import React from 'react';
import './Contact.scss';

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

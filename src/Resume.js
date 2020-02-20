import React from 'react';
import './Resume.css';
import Nav from './Nav';

const Resume = ({print}) => {
  if (print) {
    window.print();
  }
  return (
    <main className="wrapper">
      <article className="resume">
        <section className="name box">
          <div>
            Brett Nelson<br/>
            (978) 317-6692<br/>
            <a href="mailto:brettcnelson@gmail.com" target="_blank">brettcnelson@gmail.com</a><br/>
            <a href="https://brettcnelson.github.io" target="_blank">brettcnelson.github.io</a>
          </div>
        </section>
        <section className="skills box">
          skills
        </section>
        <section className="projects box">
          projects
        </section>
        <section className="education box">
          education
        </section>
      </article>
    </main>
  );
}

export default Resume;

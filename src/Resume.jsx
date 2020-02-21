import React from 'react';
import './Resume.scss';
import projects from './portfolio';

const jobs = [
  {
    name: 'The Stone Firm, LLC, Paralegal',
    dates: '2013 - 2018',
    points: [
      'Researched, reviewed, drafted and edited M&A contracts',
      'Performed legal research for regulatory compliance and document analysis to evaluate businesses'
    ]
  },
  {
    name: 'Webking McClendon Law Firm, PC, Paralegal',
    dates: '2008 - 2012',
    points: [
      'Drafted intervention, discovery and appeal documents for litigation in over 20 cases',
      'Managed accounts receivable for the 10 members of the Texas Energy Association of Marketers'
    ]
  }
];

const Resume = () => {
  return (
    <main className="wrapper">
      <a href="https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view" target="_blank" rel="noopener noreferrer">
        <button>print/download</button>
      </a>
      <article className="resume">
        <section className="name box">
          <div>
            <strong>Brett Nelson</strong><br/>
            (978) 317-6692<br/>
            <a href="mailto:brettcnelson@gmail.com" target="_blank" rel="noopener noreferrer">brettcnelson@gmail.com</a><br/>
            <a href="https://brettcnelson.github.io" target="_blank" rel="noopener noreferrer">brettcnelson.github.io</a>
          </div>
        </section>
        <section className="skills box">
          <div className="title">Technical Skills</div>
          <ul><li>HTML, CSS, Javascript, React, Angular, JQuery, Node, Express, MongoDB, Mongoose, PostgreSQL, Knex, SQLite3, D3, Git, Heroku</li></ul>
        </section>
        <section className="projects box">
          <div className="title">Software Engineering Projects</div>
          {projects.map(project)}
        </section>
        <section className="work box">
          <div className="title">Professional Experience</div>
          {jobs.map(job)}
        </section>
        <section className="education box">
          <div className="title">Education</div>
          <div><span className="title">Hack Reactor,</span> <em>Advanced Software Engineering Immersive Program</em><span className="right">2017</span></div>
          <div><span className="title">Tufts University,</span> <em> B.A., Anthropology</em><span className="right">2008</span></div>
        </section>
      </article>
    </main>
  );
  function project(p,i) {
    return (
      <section key={i}>
        <span className="entry">{p.name}</span> (<a href={p.code}  target="_blank" rel="noopener noreferrer">link</a>)
        <div className="desc">{p.desc}</div>
        <ul>{p.points.map((p,i)=><li key={i}>{p}</li>)}</ul>
      </section>
    );
  }
  function job(j,i) {
    return (
      <section key={i}>
        <div><div className="entry">{j.name}</div><div className="right">{j.dates}</div></div>
        <ul>{j.points.map((p,i)=><li key={i}>{p}</li>)}</ul>
      </section>
    );
  }
}

export default Resume;

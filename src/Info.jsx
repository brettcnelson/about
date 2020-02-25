import React from 'react';
import './Info.scss';
import { IconList } from './fontawesome';

const skills = 'HTML, CSS, Sass, Javascript, React, Angular, JQuery, Node, Express, MongoDB, Mongoose, PostgreSQL, Knex, SQLite3, D3, Git, Heroku';

const jobs = [
  {
    name: 'The Stone Firm, LLC',
    position: 'Paralegal',
    dates: '2013 - 2018',
    points: [
      'Researched, reviewed, drafted and edited M&A contracts',
      'Performed legal research for regulatory compliance and document analysis to evaluate businesses'
    ]
  },
  {
    name: 'Webking McClendon Law Firm, PC',
    position: 'Paralegal',
    dates: '2008 - 2012',
    points: [
      'Drafted intervention, discovery and appeal documents for litigation in over 20 cases',
      'Managed accounts receivable for the 10 members of the Texas Energy Association of Marketers'
    ]
  }
];

const job = (j,i) => (
  <div key={i} className="box job">
    <div className="name">{j.name}</div>
    <div className="position">{j.position}</div>
    <ul>{j.points.map((p,i)=><li key={i}>{p}</li>)}</ul>
  </div>
);

const education = [
  {
    name: 'Hack Reactor',
    desc: 'Advanced Software Engineering Immersive Program',
    date: 2017
  },
  {
    name: 'Tufts University',
    desc: 'B.A., Anthropology',
    date: 2008
  }
];

const school = (s,i) => (
  <div key={i}  className="box school">
    <div className="name">{s.name}</div>
    <div className="desc">{s.desc}</div>
    <div className="date">{s.date}</div>
  </div>
);

export default () => (
  <div className="info">
    <h1 className="lg-heading">Info</h1>
    <div>
      <h3 className="sm-heading">Contact</h3>
      <div className="icons">{IconList(true)}</div>
    </div>
    <div>
      <h3 className="sm-heading">Skills</h3>
      <ul className="box skills"><li>{skills}</li></ul>
    </div>
    <div>
      <h3 className="sm-heading">Work Experience</h3>
      <div className="jobs">
        {jobs.map(job)}
      </div>
    </div>
    <div>
      <h3 className="sm-heading">Education</h3>
      <div className="schools">
        {education.map(school)}
      </div>
    </div>
  </div>
);

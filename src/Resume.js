import React from 'react';
import './Resume.css';

const projects = [
  {
    name: 'Viking Conquest',
    link: 'https://github.com/trivial-conquest/trivial-conquest',
    desc: 'A location-based territorial strategy game.',
    points: [
      'Called Google Maps API to render location-based maps and save user-designated map markers',
      'Configured Ionic framework with Cordova plugins to develop mobile web-focused UI',
      'Created front-end Angular controllers to handle user input and read from/write to database',
      'Employed test-driven workflow to limit debugging and ensure app functionality during development'
    ]
  },
  {
    name: 'Github Repo Search, Software Engineer',
    link: 'https://github.com/brettcnelson/fullstackgithub',
    desc: 'Search GitHub for any user and view a list of repositories sorted by popularity.',
    points: [
      'Created Knex schemas to manage SQLite database',
      'Called GitHub API to add data to database using Node and Express',
      'Managed front-end GET and POST requests using jQuery AJAX calls'
    ]
  },
  {
    name: 'React Fullstack Boilerplate',
    link: 'https://github.com/brettcnelson/react-fullstack-boilerplate',
    desc: 'A fullstack create-react-app.',
    points: [
      'Built fullstack boilerplate with create-react-app, react-router, an expres proxy API server, working CRUD functionality with MongoDB/mongoose - preconfigured for easy Heroku deployment'
    ]
  },
  {
    name: 'Dark Sky New Tab Chrome Extension',
    link: 'https://github.com/brettcnelson/dark-sky-new-tab',
    desc: 'A lightweight weather widget chrome extension.',
    points: [
      'Published new tab Chrome extension in Chrome Web Store (~475 users, 4.9 star rating)',
      'Combined Dark Sky weather data with Google Maps API to: get location-based weather, search any location for weather, get relevant Dark Sky and Google Maps links, and save your search locations'
    ]
  },
  {
    name: 'Tic-Tac-Toe Basic Machine Learning',
    link: 'https://github.com/brettcnelson/auto-tic',
    desc: 'A self-trained tic-tac-toe engine.',
    points: [
      'Wrote machine learning algorithm for tic-tac-toe self-play',
      'Built React front-end where users can play against the computer as it continues to learn'
    ]
  },
  {
    name: 'Sudoku Solver',
    link: 'https://github.com/brettcnelson/sudoku-solver',
    desc: '',
    points: [
      'Wrote React front-end combined with algorithm to recursively solve any Sudoku puzzle'
    ]
  },
  {
    name: 'Lightweight Framework',
    link: 'https://github.com/brettcnelson/MinimalFramework',
    desc: '',
    points: [
      'Built lightweight, minimal front-end framework script that diffs the DOM and manages component state'
    ]
  }
];

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
  function project(p) {
    return (
      <section>
        <span className="entry">{p.name}</span> (<a href={p.link}  target="_blank" rel="noopener noreferrer">link</a>)
        <div className="desc">{p.desc}</div>
        <ul>{p.points.map(p=><li>{p}</li>)}</ul>
      </section>
    );
  }
  function job(j) {
    return (
      <div>
        <div><div className="entry">{j.name}</div><div className="right">{j.dates}</div></div>
        <ul>{j.points.map(p=><li>{p}</li>)}</ul>
      </div>
    );
  }
}

export default Resume;

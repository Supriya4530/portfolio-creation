import React from 'react';
import './styles/Template1.css';

const Template1 = ({ data }) => {
  const { name, education, skills, collegeName, photo, experience, projects } = data;

  return (
    <div className="template1">
      <div className="header">
        <img src={photo} alt="Profile" className="profile-pic" />
        <h1>{name}</h1>
        <p>{education}</p>
      </div>
      <div className="content">
        <section>
          <h2>Education</h2>
          <p>{collegeName}</p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>{skills}</p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>{experience}</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>{projects}</p>
        </section>
      </div>
    </div>
  );
};

export default Template1;

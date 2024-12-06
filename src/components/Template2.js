import React from 'react';
import './styles/Template2.css';

const Template2 = ({ data }) => {
  const { name, education, skills, collegeName, photo, experience, projects } = data;

  return (
    <div className="template2">
      <div className="header">
        <div className="profile">
          <img src={photo} alt="Profile" className="profile-pic" />
          <h1>{name}</h1>
          <p>{education}</p>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <h2>Education</h2>
          <p>{collegeName}</p>
        </div>
        <div className="card">
          <h2>Skills</h2>
          <p>{skills}</p>
        </div>
        <div className="card">
          <h2>Experience</h2>
          <p>{experience}</p>
        </div>
        <div className="card">
          <h2>Projects</h2>
          <p>{projects}</p>
        </div>
      </div>
    </div>
  );
};

export default Template2;

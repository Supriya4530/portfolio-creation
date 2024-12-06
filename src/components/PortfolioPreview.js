import React from 'react';

const PortfolioPreview = ({ formData }) => {
  const { name, education, skills, collegeName, photo, experience, projects } = formData;

  return (
    <div id="portfolio-preview">
      <h1>{name}</h1>
      <p>Education: {education}</p>
      <p>Skills: {skills}</p>
      <p>College: {collegeName}</p>
      {photo && <img src={photo} alt="Profile" />}
      <p>Experience: {experience}</p>
      <p>Projects: {projects}</p>
    </div>
  );
};

export default PortfolioPreview;

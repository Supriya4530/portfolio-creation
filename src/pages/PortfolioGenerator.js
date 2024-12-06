import React, { useState } from 'react';
import { generatePortfolioHTML } from '../utils/portfolioGenerator';
import '../styles/PortfolioGenerator.css';

const PortfolioGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    skills: '',
    collegeName: '',
    photo: '',
    experience: '',
    projects: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePortfolioHTML(formData);
  };

  return (
    <div className="portfolio-generator">
      <h2>Portfolio Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <textarea
          name="projects"
          placeholder="Projects"
          value={formData.projects}
          onChange={handleChange}
        />
        <input
          type="file"
          onChange={handlePhotoChange}
          required
        />
        <button type="submit">Generate Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioGenerator;

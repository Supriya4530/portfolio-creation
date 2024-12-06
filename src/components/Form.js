import React, { useState } from 'react';
import '../styles/Form.css';

const Form = ({ setFormData }) => {
  const [formState, setFormState] = useState({
    name: '',
    education: '',
    skills: '',
    collegeName: '',
    photo: '',
    experience: '',
    projects: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormState((prev) => ({ ...prev, photo: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="education" placeholder="Education" onChange={handleChange} />
      <input type="text" name="skills" placeholder="Skills" onChange={handleChange} />
      <input type="text" name="collegeName" placeholder="College Name" onChange={handleChange} />
      <input type="file" name="photo" onChange={handlePhotoUpload} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} />
      <textarea name="projects" placeholder="Projects" onChange={handleChange} />
      <button type="submit">Generate Portfolio</button>
    </form>
  );
};

export default Form;

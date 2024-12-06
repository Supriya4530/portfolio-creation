import React from 'react';
import '../styles/TemplateSelector.css';

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  const templates = [
    { id: 'template1', name: 'Template 1' },
    { id: 'template2', name: 'Template 2' },
  ];

  return (
    <div className="template-selector">
      <h3>Select a Portfolio Template</h3>
      <div className="template-options">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-option ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;

import React from 'react';
import { generatePDF } from '../utils/portfolioGenerator';

const DownloadButton = () => (
  <button onClick={() => generatePDF('portfolio-preview')}>Download Portfolio</button>
);

export default DownloadButton;
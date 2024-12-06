// utils/portfolioGenerator.js
export const generatePortfolioHTML = (data) => {
    const { name, education, skills, collegeName, photo, experience, projects } = data;
  
    // HTML structure for the portfolio
    const portfolioHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name} - Portfolio</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 80%;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          header {
            text-align: center;
            margin-bottom: 20px;
          }
          header img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
          }
          h1 {
            color: #007bff;
          }
          h2 {
            color: #007bff;
            border-bottom: 2px solid #007bff;
            display: inline-block;
            padding-bottom: 5px;
          }
          section {
            margin-bottom: 30px;
          }
          section p {
            font-size: 16px;
            line-height: 1.6;
          }
          .skills, .projects {
            display: flex;
            flex-wrap: wrap;
          }
          .skills span, .projects span {
            background-color: #f0f0f0;
            margin: 5px;
            padding: 5px 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <img src="${photo}" alt="Profile Picture">
            <h1>${name}</h1>
            <p><strong>Education:</strong> ${education} at ${collegeName}</p>
          </header>
  
          <section>
            <h2>Skills</h2>
            <p>${skills}</p>
          </section>
  
          <section>
            <h2>Experience</h2>
            <p>${experience}</p>
          </section>
  
          <section>
            <h2>Projects</h2>
            <div class="projects">
              <p>${projects}</p>
            </div>
          </section>
        </div>
      </body>
      </html>
    `;
  
    // Function to trigger the download of the generated HTML file
    const downloadHTMLFile = () => {
      const blob = new Blob([portfolioHTML], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${name}-portfolio.html`;
      link.click();
    };
  
    // Trigger the download
    downloadHTMLFile();
  };
  
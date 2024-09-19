import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="header">
        <h1>Mervie V. Isip</h1>
        <p className="title">Software Engineer & Web Developer</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column */}
        <div className="left-column">
          <section className="profile-section">
            <img src="/profile-picture.jpg" alt="Profile" className="profile-picture" />
          </section>

          <section className="contact-section">
            <h2>Contact</h2>
            <p>Email: mervieisip@gmail.com</p>
            <p>Phone: 09923690096</p>
            <p>Location: Colgante, Apalit, Pampanga</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mervie-v-isip-286656279/">linkedin.com/in/mervie</a></p>
            <p>Github: <a href="https://github.com/IsipMervie">github.com/mervie</a></p>
          </section>

          <section className="education-section">
            <h2>Education</h2>
            <p><strong>Bachelor of Science</strong></p>
            <p>Information Technology</p>
            <p>University of the Assumption</p>
            <p>2018 - 2022</p>
            <p>Pampanga, Philippines</p>
          </section>

          <section className="skills-section">
          <h2>Skills</h2>
<ul>
  <li>HTML, CSS, JavaScript</li>
  <li>React</li>
  <li>Node.js & Express</li>
  <li>MySQL, MongoDB</li>
  <li>Responsive Design & Mobile First Approach</li>
  <li>APIs (RESTful & GraphQL)</li>
  <li>Git & GitHub</li>
  <li>Version Control & CI/CD</li>
  <li>Testing (Jest, Mocha, Chai)</li>
  <li>Agile Methodologies</li>
</ul>

          </section>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <section className="experience-section">
            <h2>Work Experience</h2>

            <div className="job">
              <h3>Full Stack Developer</h3>
              <p>Freelance / 2022 - Present / Remote</p>
              <ul>
                <li>Developed and maintained responsive websites for small businesses and startups.</li>
                <li>Collaborated with clients to create user-friendly and scalable solutions using React and Node.js.</li>
                <li>Implemented secure user authentication systems, increasing customer trust and satisfaction.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Junior Web Developer</h3>
              <p>ABC Tech Solutions / 2021 - 2022 / Manila, Philippines</p>
              <ul>
                <li>Worked as part of a development team to build dynamic and responsive websites.</li>
                <li>Utilized HTML, CSS, and JavaScript to enhance frontend experiences for clients.</li>
                <li>Helped maintain internal tools for tracking bugs and performance improvements.</li>
              </ul>
            </div>

            <div className="job">
              <h3>React Developer</h3>
              <p>XYZ Innovations / 2020 - 2021 / Remote</p>
              <ul>
                <li>Contributed to React-based web applications, improving frontend performance by 20%.</li>
                <li>Implemented complex state management solutions using Redux and Context API.</li>
                <li>Collaborated with a team of designers to enhance user interface design and responsiveness.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Intern Software Engineer</h3>
              <p>Global Systems Corp / 2019 - 2020 / Pampanga, Philippines</p>
              <ul>
                <li>Assisted senior developers in building internal tools and web applications.</li>
                <li>Contributed to backend services using Node.js and Express.</li>
                <li>Worked on database management with MongoDB to optimize data storage and retrieval.</li>
              </ul>
            </div>
          </section>

          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project">
              <h3>Online Portfolio</h3>
              <p>A personal portfolio website showcasing my skills, projects, and contact information. Built with React, CSS, and GitHub Pages for deployment.</p>
            </div>

            <div className="project">
              <h3>Task Manager App</h3>
              <p>A full-stack web app for managing tasks and deadlines with user authentication, built using React, Node.js, Express, and MongoDB.</p>
            </div>
            
            <div className="project">
              <h3>E-commerce Website</h3>
              <p>Built a fully functional e-commerce platform using React and Redux for state management, and Node.js for backend services, with Stripe for payment processing.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;

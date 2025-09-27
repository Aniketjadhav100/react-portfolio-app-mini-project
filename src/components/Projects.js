import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project">
        <h3>Portfolio Website</h3>
        <p>Personal portfolio built using React and deployed on AWS S3.</p>
      </div>
      <div className="project">
        <h3>CI/CD Pipeline</h3>
        <p>Automated deployments using Jenkins, Docker, and Terraform.</p>
      </div>
    </section>
  );
}

export default Projects;

import "../src/assets/Projects.css"; // Adjust the path as necessary

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "https://github.com/yourusername/project-three",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projectsMain">
      <div className="container">
        <h1>My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

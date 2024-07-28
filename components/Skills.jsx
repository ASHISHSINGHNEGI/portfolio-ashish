import "../src/assets/Skills.css"; // Adjust the path as necessary

export default function Skills() {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
    "Frameworks & Libraries": ["React", "Node.js", "Express.js", "Django"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS"],
  };

  return (
    <div className="skillsMain">
      <div className="container">
        <h1>My Skills</h1>
        <div className="skills-list">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category}</h2>
              <ul>
                {skills[category].map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import "../src/assets/About.css"; // Adjust the path as necessary
import profilePhoto from "../src/assets/ashishsinghnegi1.jpeg"; // Ensure you have a profile photo

export default function About() {
  return (
    <div className="aboutMain">
      <div className="container">
        <div className="profile">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <div className="bio">
          <h1>About Me</h1>
          <p>
            Hello! I&apos;m Ashish Singh Negi, a passionate Full Stack Developer
            with a strong foundation in the MERN stack. I love creating web
            applications that are not only functional but also have a great user
            experience.
          </p>
          <p>
            With a background in computer science, I have developed a deep
            understanding of both front-end and back-end technologies. I enjoy
            learning new tools and technologies to stay up-to-date with industry
            trends.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

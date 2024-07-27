import { NavLink } from "react-router-dom";
import "../src/assets/Home.css";

export default function Home() {
  return (
    <>
      <div className="homeMain">
        <div className="container">
          <div className="name">
            <p>Ashish Singh Negi</p>
          </div>
          <div className="role">
            <p>Software Engineer</p>
          </div>
          <div className="description">
            <p>
              Dynamic and versatile Full Stack Developer with a strong
              foundation in the MERN stack.
            </p>
          </div>
          <div className="buttons">
            <NavLink className="contactme" to={"/contact"}>
              Contact Me
            </NavLink>
            <NavLink className="resume">Resume</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

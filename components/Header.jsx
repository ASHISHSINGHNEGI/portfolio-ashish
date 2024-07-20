import { NavLink } from "react-router-dom";
import "../src/App.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Ashish Singh Negi</p>
        </div>
        <div className="links">
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div>
            <NavLink to={"/about"}>About</NavLink>
          </div>
          <div>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <div>
            <NavLink to={"/projects"}>Projects</NavLink>
          </div>
          <div>
            <NavLink to={"/skills"}>Skills</NavLink>
          </div>
        </div>
        <div className="socialLinks">
          <div>
            <a href="linkedin">linkedin</a>
          </div>
          <div>
            <a href="github">Github</a>
          </div>
        </div>
      </div>
    </>
  );
}

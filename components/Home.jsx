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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="buttons">
            <NavLink to={"/contact"}>Contact Me</NavLink>
            <span>resume download</span>
          </div>
        </div>
      </div>
    </>
  );
}

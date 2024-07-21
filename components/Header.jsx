import { Link, NavLink } from "react-router-dom";
import "../src/App.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>
            <span>Ashish</span> Singh Negi
          </p>
        </div>
        <div className="links">
          <div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "activelink" : "passiveLink"}`
              }
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "activelink" : "passiveLink"}`
              }
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "activelink" : "passiveLink"}`
              }
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `${isActive ? "activelink" : "passiveLink"}`
              }
            >
              Projects
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                `${isActive ? "activelink" : "passiveLink"}`
              }
            >
              Skills
            </NavLink>
          </div>
        </div>
        <div className="socialLinks">
          <div>
            <Link to={"linkedin"}>
              <img src="linkedin-svgrepo-com.svg" alt="" />
            </Link>
          </div>
          <div>
            <Link to={"github"}>
              <img src="github-142-svgrepo-com.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

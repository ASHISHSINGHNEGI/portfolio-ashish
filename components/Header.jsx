import { Link, NavLink } from "react-router-dom";
import "../src/App.css";
import { useState } from "react";

export default function Header() {
  const [menuOn, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu(!menuOn);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>
            <span>Ashish</span> Singh Negi
          </p>
        </div>
        <div className={`links ${menuOn ? "menu-active" : ""}`}>
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
        <div className="menuButton" onClick={changeMenu}>
          <img
            src={menuOn ? "close-svgrepo-com.svg" : "menu.svg"}
            alt="Menu Icon"
          />
        </div>
      </div>
      <div className="mobileNavbar">
        <div className={`links ${menuOn ? "menu-active" : ""}`}>
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
      </div>
    </>
  );
}

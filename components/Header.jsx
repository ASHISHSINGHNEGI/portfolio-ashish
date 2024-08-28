import { Link, NavLink } from "react-router-dom";
import "../src/App.css";
import { useState } from "react";

export default function Header() {
  const [menuOn, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu(!menuOn);
  };

  const closeMenu = () => {
    setMenu(false);
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
        <div className="menuButton" onClick={changeMenu}>
          <img
            src={menuOn ? "close-svgrepo-com.svg" : "menu.svg"}
            alt="Menu Icon"
          />
        </div>
      </div>
      <div
        className={`mobileNavbar ${
          menuOn ? "mobileNavbar-active" : "mobileNavbar-passive"
        }`}
      >
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "activelink" : "passiveLink"}`
            }
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Skills
          </NavLink>
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

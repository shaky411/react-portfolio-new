import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/react-portfolio-new/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio-new/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio-new/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio-new/contact"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio-new/learn"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Learn
          </NavLink>
          
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;

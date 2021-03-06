import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-success ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              2NM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/employe" className="nav-link text-white">
              Employe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/experience" className="nav-link text-white">
              Experience
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavbarMenu;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      
      
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/signIn"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            SignIn
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/signup"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            SignUp
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            AdminSign
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/tournois"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            Tournois
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/blogs"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Blogs
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);



export default SideBar;

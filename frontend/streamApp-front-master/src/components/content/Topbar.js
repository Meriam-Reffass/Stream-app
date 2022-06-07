import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const navigate =useNavigate();
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
function stream(){
  if(localStorage.user){
    navigate("/stream", { replace: true })
  }else{
    window.alert("sign in to stream")
  }
}
function blog(){
  if(localStorage.user){
    navigate("/addblog", { replace: true })
  }else{
    window.alert("sign in to stream")
  }
}
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem onClick={stream}>
            <NavLink tag={Link} to={"/"}>
              Stream
            </NavLink>
          </NavItem>
          <NavItem onClick={blog}>
            <NavLink tag={Link} to={"/"}>
              Write a blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
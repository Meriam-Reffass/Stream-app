import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import SignIn from "../../sign-in";
import Topbar from "./Topbar";
import Signup from "../../signup";
import VideoPlayer from "../VideoPlayer";
import Chat from "../../Chat";
import Tournois from "../Tournois";
import Formtournois from "../formtournois";
import Admin from "../../admin";
import AdminLogin from "../../AdminLogin";
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route path="/" exact element={<VideoPlayer/>} />
      <Route path="/admin" exact element={<Admin/>} />
      <Route path="/:id" exact element={<Chat id="1"/>} />
      <Route exact path="/about" component={() => "About"} />
      <Route path="/tournois" exact element={<Tournois/>} />
      <Route path="/adminTour" exact element={<Formtournois></Formtournois>} />
      <Route exact path="/contact" component={() => "Contact"} />
      <Route path="/faq" exact element={<AdminLogin/>} />
      <Route exact path="/Home-2" component={() => "Home-2"} />
      <Route exact path="/Home-3" component={() => "Home-3"} />
      <Route path='/signIn' exact element={<SignIn/>} />
      <Route path="/signup" exact element={<Signup/>} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
    </Routes>
  </Container>
);

export default Content;

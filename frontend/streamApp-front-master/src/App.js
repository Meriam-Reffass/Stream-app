import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "./components/VideoPlayer";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "./App.css";
<script src="https://player.live-video.net/1.0.0/amazon-ivs-player.min.js"></script>
const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    
      <div className="App wrapper">
        
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        
      </div>
  
  );
};

export default App;

// src/components/Sidebar.js
import React from 'react';
import { FaFilm, FaFootballBall } from 'react-icons/fa'; // Import icons
import { IoHome } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Add icons */}
      <div className="icon"><IoHome /></div>
      <div className="icon"><FaFilm /></div>
      <div className="icon"><FaFootballBall /></div>
      
      {/* Add more icons as needed */}
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Goals</div>
      <div className="sidebar-item">Popular Dishes</div>
      <div className="sidebar-item">Menus</div>
    </div>
  );
};

export default Sidebar;
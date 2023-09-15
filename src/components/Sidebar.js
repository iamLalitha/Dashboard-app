import React from 'react';
import './Sidebar.css';
import {FiPieChart} from 'react-icons/fi';
import {BsFillTagsFill} from 'react-icons/bs';
import {TbCalendarStats} from 'react-icons/tb';
import {BiUserCircle} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Board</div>
      <br></br>
      <div className="options">
        <div className="option"><FiPieChart/> Dashboard</div>
        <div className="option"><BsFillTagsFill/>Transactions</div>
        <div className="option"><TbCalendarStats/>Schedule</div>
        <div className="option"><BiUserCircle/>Users</div>
        <div className="option"><FiSettings/>Settings</div>
      </div>
      <div className="bottom-options">
        <div className="option">Help</div>
        <div className="option">Contact Us</div>
      </div>
    </div>
  );
}

export default Sidebar;

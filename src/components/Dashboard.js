import React from 'react';
import Sidebar from './Sidebar';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './Dashboard.css';
import ActivitiesCard from './ActivitiesCard';
import TopProductsCard from './TopProductsCard';
import AddProfileCard from './AddProfileCard';
import  revenue from '../revenue.png';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <div className="dashboard-controls">
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="notification-icon">
              <FaBell />
            </div>
            <div className="profile-icon">
              <FaUser />
            </div>
          </div>
        </div>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <img src={revenue} alt='revenue' style={{width:'50px',height:'50px'}} />
            <h3>Total Revenues</h3>
            <p>$10,000</p>
          </div>
          <div className="dashboard-card">
            <h3>Total Transactions</h3>
            <p>500</p>
          </div>
          <div className="dashboard-card">
            <h3>Total Likes</h3>
            <p>1,000</p>
          </div>
          <div className="dashboard-card">
            <h3>Total Users</h3>
            <p>5,000</p>
          </div>
        </div>
        <ActivitiesCard />
        <div className="lower-cards">
        <TopProductsCard />
        <AddProfileCard />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;



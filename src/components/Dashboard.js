import React from 'react';
import Sidebar from './Sidebar';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './Dashboard.css';
import ActivitiesCard from './ActivitiesCard';
import TopProductsCard from './TopProductsCard';
import AddProfileCard from './AddProfileCard';
import  revenue from '../revenue.png';
import tags from '../tags.png';
import likes from '../likes.png';
import users from '../users.png';
import percent from '../percent.png';

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
            <h4 style={{marginLeft:'15px'}}>Total Revenues</h4>
            <div className='inline-container'>
            <p style={{fontSize:'20px', marginLeft:'15px'}}>$10,000 </p>
            <img src={percent} alt='revenue' style={{width:'50px',height:'50px', marginLeft:'130px'}} />
            </div>
          </div>
          <div className="dashboard-card">
          <img src={tags} alt='revenue' style={{width:'50px',height:'50px'}} />
            <h4 style={{marginLeft:'15px'}}>Total Transactions</h4>
            <div className='inline-container'>
             <p style={{fontSize:'20px', marginLeft:'15px'}}>500</p>
            <img src={percent} alt='revenue' style={{width:'50px',height:'50px', marginLeft:'130px'}} />
          </div>
          </div>
          <div className="dashboard-card">
          <img src={likes} alt='revenue' style={{width:'50px',height:'50px'}} />
            <h4 style={{marginLeft:'15px'}}>Total Likes</h4>
            <div className='inline-container'>
             <p style={{fontSize:'20px', marginLeft:'15px'}}>1,000</p>
            <img src={percent} alt='revenue' style={{width:'50px',height:'50px', marginLeft:'130px'}} />
          </div>
          </div>
          <div className="dashboard-card">
          <img src={users} alt='revenue' style={{width:'50px',height:'50px'}} />
            <h4 style={{marginLeft:'15px'}}>Total Users</h4>
            <div className='inline-container'>
            <p style={{fontSize:'20px', marginLeft:'15px'}}>5,000</p>
            <img src={percent} alt='revenue' style={{width:'50px',height:'50px', marginLeft:'130px'}} />
          </div>
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



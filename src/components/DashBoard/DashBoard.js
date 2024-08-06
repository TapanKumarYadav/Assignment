import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ActivityChart from '../ActivityChart/ActivityChart';
import RecentOrders from '../RecentOrders/RecentOrders';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="top-section">
          <div className="metrics">
            <div className="metric-box">
              <h3>Total Orders</h3>
              <img className="Total-image" src="Total_Orders.png" alt="..." />
              <p>75</p>
            </div>
            <div className="metric-box">
              <h3>Total Delivered</h3>
              <p>70</p>
            </div>
            <div className="metric-box">
              <h3>Total Cancelled</h3>
              <p>5</p>
            </div>
            <div className="metric-box">
              <h3>Total Revenue</h3>
              <p>$12k</p>
            </div>
            <div className="metric-box">
              <h3>Net Profit</h3>
              <p>$6759.25</p>
            </div>
          </div>
          <div className="activity">
            <ActivityChart />
          </div>
        </div>
        <div className="bottom-section">
          <RecentOrders />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
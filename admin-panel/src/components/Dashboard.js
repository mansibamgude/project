import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/products">Manage Products</Link></li>
        <li><Link to="/orders">Manage Orders</Link></li>
        <li><Link to="/payments">Manage Payments</Link></li>
        <li><Link to="/feedback">Manage Feedback</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;

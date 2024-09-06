import React from 'react';
import './AdminPanel.css'; // Adjust the path as necessary

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <a href="#manage-products">Manage Products</a>
        <a href="#manage-orders">Manage Orders</a>
        <a href="#manage-payments">Manage Payments</a>
        <a href="#manage-feedback">Manage Feedback</a>
      </div>
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        <div className="table-container">
          {/* Your tables and other content */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

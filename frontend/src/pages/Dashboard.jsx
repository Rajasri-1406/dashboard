import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const internName = localStorage.getItem("internName") || "Anonymous";
  const referralCode = internName.toLowerCase().replace(/\s/g, '') + "2025";

  return (
    <div className="dashboard-container">
      <h2>Welcome, {internName}!</h2>
      <div className="dashboard-item"><strong>Referral Code:</strong> {referralCode}</div>
      <div className="dashboard-item"><strong>Total Donations Raised:</strong> ₹5,000</div>
      <div className="dashboard-item">
        <strong>Rewards:</strong>
        <ul className="rewards-list">
          <li>T-shirt after ₹1,000</li>
          <li>Certificate after ₹2,500</li>
          <li>Goodies after ₹5,000</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
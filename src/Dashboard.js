import React from 'react';

const Dashboard = ({ userData, handleLogout }) => {
  return (
    <div>
      <h2>Welcome, {userData.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import DataDisplay from './DataDisplay';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUserData(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          <Dashboard userData={userData} handleLogout={handleLogout} />
          <DataDisplay />
        </>
      )}
    </div>
  );
};

export default App;

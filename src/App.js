import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FightNetwork from './components/FightNetwork';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Messaging from './components/Messaging';
import EventsPage from './components/EventsPage';
import Forums from './components/Forums';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') === 'true');

  React.useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/fight-network"
            element={isLoggedIn ? <FightNetwork /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/notifications"
            element={isLoggedIn ? <Notifications /> : <Navigate to="/login" />}
          />
          <Route
            path="/messaging"
            element={isLoggedIn ? <Messaging /> : <Navigate to="/login" />}
          />
          <Route
            path="/events"
            element={isLoggedIn ? <EventsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/forums"
            element={isLoggedIn ? <Forums /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

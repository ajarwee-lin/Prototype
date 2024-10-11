import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import URide from './components/URide';
import UEat from './components/UEat';
import UDelivery from './components/UDelivery';
import UStay from './components/UStay';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import './App.css';

// Function to check if user is authenticated (by checking JWT token in localStorage)
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token != null;
};

function App() {
  const [auth, setAuth] = useState(isAuthenticated());

  // Whenever the token changes, update the auth status
  useEffect(() => {
    setAuth(isAuthenticated());
  }, [auth]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/u-ride">
          {auth ? <URide /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/u-eat">
          {auth ? <UEat /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/u-delivery">
          {auth ? <UDelivery /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/u-stay">
          {auth ? <UStay /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/auth" component={Auth} />
        <Route path="*">
          <h1>404 Not Found</h1> {/* Basic 404 page */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

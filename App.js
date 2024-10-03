import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import URide from './components/URide';
import UEat from './components/UEat';
import UDelivery from './components/UDelivery';
import UStay from './components/UStay';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/u-ride" component={URide} />
        <Route path="/u-eat" component={UEat} />
        <Route path="/u-delivery" component={UDelivery} />
        <Route path="/u-stay" component={UStay} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;

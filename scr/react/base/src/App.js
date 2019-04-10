import React, { Component } from 'react';
import './App.css';
import Routers from './routers/index.js';
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="link-wrap">
          <NavLink to="/home" className="home">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <Routers />
      </div>
    );
  }
}

export default App;

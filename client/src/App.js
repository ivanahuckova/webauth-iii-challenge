import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Inmport Components
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UserList from './Components/UserList';
import DepartmentList from './Components/DepartmentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/register" render={pr => <egister {...pr} />} />
        <Route exact path="/login" render={pr => <Login {...pr} />} />
      </div>
    );
  }
}

export default App;

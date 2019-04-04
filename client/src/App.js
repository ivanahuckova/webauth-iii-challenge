import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Inmport Components
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UserList from './Components/UserList';
import DepartmentList from './Components/DepartmentList';
import Landing from './Components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={pr => <Landing {...pr} />} />
        <Route exact path="/login" render={pr => <Login {...pr} />} />
        <Route exact path="/register" render={pr => <Register {...pr} />} />
        <Route exact path="/users" render={pr => <UserList {...pr} />} />
        <Route exact path="/departments" render={pr => <DepartmentList {...pr} />} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Navbar(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.push('/');
  };
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/department">Department</NavLink>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default withRouter(Navbar);

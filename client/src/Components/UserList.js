import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      props.history.push('/login');
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4444/api/users', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>The list of all users</h2>
      {users.map((user, index) => (
        <div key={index}>{user.username}</div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DepartmentList(props) {
  const [sameDepUsers, setDepUsers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      props.history.push('/login');
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4444/api/department', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then(res => {
        setDepUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const department = localStorage.getItem('department');
  return (
    <div>
      <h2>{`The list of users from the ${department} department`}</h2>
      {sameDepUsers.map((user, index) => (
        <div key={index}>{user.username}</div>
      ))}
    </div>
  );
}

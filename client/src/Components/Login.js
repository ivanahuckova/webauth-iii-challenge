import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState('');

  const onLogin = e => {
    e.preventDefault();
    axios
      .post('http://localhost:4444/api/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem('department', res.data.department);
        localStorage.setItem('token', res.data.token);
        setMessage(`${res.data.message}`);
      })
      .catch(err => {
        setMessage(`Error: ${err.response.data.message}`);
      });
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <div>
          username: <input required="required" type="text" ref={usernameRef} />
        </div>
        <div>
          password: <input required="required" type="text" ref={passwordRef} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
}

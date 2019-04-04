import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Register(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const departmentRef = useRef();
  const [message, setMessage] = useState('');

  const onRegister = e => {
    e.preventDefault();
    axios
      .post('http://localhost:4444/api/register', {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        department: departmentRef.current.value
      })
      .then(res => {
        setMessage(`${res.data.message}`);
      })
      .catch(err => {
        setMessage(`Error: ${err.response.data.message}`);
      })
      .finally(() => props.history.push(`/login`));
  };

  return (
    <div>
      <form onSubmit={onRegister}>
        <div>
          username: <input required="required" type="text" ref={usernameRef} />
        </div>
        <div>
          password: <input required="required" type="text" ref={passwordRef} />
        </div>
        <div>
          department: <input required="required" type="text" ref={departmentRef} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
}

import React from 'react';
import './LoginRegister.css';
import { Button } from '@mui/material';

const Login = () => {
  return (
    <div className="login">
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="password"></input>
      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Login;

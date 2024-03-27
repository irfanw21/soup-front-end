import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Container, Button } from '@mui/material';
import HeaderAuth from "../../components/Header-auth"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = () => {
    // Your handleClick logic here
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Perform basic validation
    if (!formData.email || !formData.password) {
      setErrors({
        email: !formData.email ? 'Email is required' : '',
        password: !formData.password ? 'Password is required' : ''
      });
      return;
    }

    // If validation passes, proceed with form submission
    console.log(formData);
    setErrors({
      email: '',
      password: ''
    });
    
    // Redirect to homepage after login
    window.location.href = '/?isHomepage=true';
  };

  return (
    <Box
      className="login-container"
      sx={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Montserrat, sans-serif'
      }}
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

        .login-container {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .welcome-text {
          font-family: Montserrat;
          font-size: 24px;
          font-weight: 500;
          line-height: 29.26px;
          text-align: left;
          color: #790B0A;
        }

        .brief-text {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.5px;
          text-align: left;
          color: #4F4F4F;
          margin-top: 20px;
          margin-bottom: 30px;
        }

        .brief-text span {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.5px;
          text-align: left;
          color: blue;
          margin-top: 20px;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .login-form {
          width: 616px;
        }

        input {
          font-family: Montserrat;
          font-size: 15px;
          font-weight: 400;
          line-height: 18.29px;
          text-align: left;
          color: #333333;
          width: 100%;
          height: 34px;
          padding: 8px;
          margin: 3px 0px;
          border-radius: 4px;
          border: 1px solid transparent;
          border-color: #CFD6E5;
        }

        .button_login {
          display: flex;
          justify-content: flex-end;
          width: 630px;
          margin-top: 20px;
        }

        button.btn {
          font-family: Montserrat;
          width: 140px;
          height: 38px;
          padding: 10px 20px;
          gap: 10px;
          border-radius: 8px;
          opacity: 1;
          background-color: #790B0A;
          font-size: 16px;
          font-weight: 500;
          line-height: 19.5px;
          text-align: center;
          color: white;
          transition: background-color 0.3s, color 0.3s;
          border: none;
        }

        button:hover {
          opacity: 0.5;
        }

        .signup-text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.5px;
          text-align: left;
          color: #4F4F4F;
          margin-top: 60px;
        }

        .signup-text span {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.5px;
          text-align: left;
          color: blue;
          margin-left: 5px;
        }

        .error-message {
          color: red;
          font-family: Montserrat;
          font-size: 12px;
          margin-top: -1px;
        }
        `}
      </style>
      <HeaderAuth/>
      <Box className="welcome-text">
      Welcome Back! Cheff
      </Box>
      <Box className="brief-text">
        Please login first
      </Box>
      <form className="login-form" onSubmit={onSubmit}>
        <Box className="form-group">
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </Box>
        <Box className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </Box>
        <Box className="brief-text">
          Forgot Password? <Link to="/forgot-password"><span>Click Here</span></Link>
        </Box>
        <Box className="button_login">
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              '&:hover': { backgroundColor: '#EA9E1F' },
              width: '140px',
              borderRadius: '8px',
              backgroundColor: '#EA9E1F',
              color: '#5B4947'
            }}
          >
            Login
          </Button>
        </Box>
      </form>
      <Box className="signup-text">
        Don't have an account?<Link to="/register"><span>Sign Up here</span></Link>
      </Box>
    </Box>
  );
};

export default Login;

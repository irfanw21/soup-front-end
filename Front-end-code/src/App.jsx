import React, { useState } from 'react';
import './App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter both email and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <header className="header">
        <h1>My App</h1>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </header>
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <h1>Please Welcome back, cheff!</h1>
            <h2>{email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>Welcome Back, cheff!</h2>
            <h3>Please Login First</h3>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5>Forgot Password? <a href=''>Click Here</a></h5>
            <button onClick={handleLogin}>Login</button>
            <h5 className='signup'>Don't Have An Account? <a href=''>Sign up here</a></h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;

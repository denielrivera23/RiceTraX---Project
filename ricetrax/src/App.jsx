import React, { useState } from 'react';
import './App.css';
import logo from './assets/sample.png'; // Your logo path

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (currentForm === 'login') {
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
    }

    if (currentForm === 'forgot') {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Enter a valid email';
      }
    }

    if (currentForm === 'signup') {
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Enter a valid email';
      }
      if (!formData.password) newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`${currentForm.toUpperCase()} form submitted successfully!`);
      // Submit logic goes here
    }
  };

  const renderForm = () => {
    switch (currentForm) {
      case 'login':
        return (
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <div className="forgot-password">
              <a href="#" onClick={() => setCurrentForm('forgot')}>Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

            <p className="switch-link">
              Don't have an account? <a href="#" onClick={() => setCurrentForm('signup')}>Sign Up</a>
            </p>
          </form>
        );

      case 'forgot':
        return (
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <button type="submit">Send Reset Link</button>

            <p className="switch-link">
              Remembered your password? <a href="#" onClick={() => setCurrentForm('login')}>Back to Login</a>
            </p>
          </form>
        );

      case 'signup':
        return (
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit">Sign Up</button>

            <p className="switch-link">
              Already have an account? <a href="#" onClick={() => setCurrentForm('login')}>Login</a>
            </p>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-circle">
          <img src={logo} alt="RiceTraX Logo" />
          <p>RiceTraX</p>
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default App;

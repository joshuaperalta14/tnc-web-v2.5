import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.userName.trim() === '' || formData.email.trim() === '' || formData.password === '' || formData.confirmPassword === '') {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Simulate storing user data in a database
    const userData = {
      userName: formData.userName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    // Here you would typically send userData to your backend for storage
    console.log('Sending form data to server:', userData);
    alert('Registration successful!');
  };

  return (
    <div className="signup-background">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <h3>Create an account</h3>
        <form onSubmit={handleSubmit}>
          <div className="signup-input-box">
            <label htmlFor="userName" className="signup-label"><strong>Username:</strong></label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          
          <div className="signup-input-box">
            <label htmlFor="email" className="signup-label"><strong>Email:</strong></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-box">
            <label htmlFor="phone" className="signup-label"><strong>Phone Number:</strong></label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-box">
            <label htmlFor="password" className="signup-label"><strong>Password:</strong></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-box">
            <label htmlFor="confirmPassword" className="signup-label"><strong>Confirm Password:</strong></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-type your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Sign up</button>

          <div className="signup-register-link">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
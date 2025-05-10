import React, { useState } from 'react';
import axios from 'axios';
import "../styles/registerpage.css";

const UserRegistration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the registration data to your backend
      const response = await axios.post('http://localhost:8080/api/users', formData);
      
      // Set a success message if the registration is successful
      setMessage('User registered successfully!');
      
      // Clear the form fields
      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      
      setMessage('Error registering user. Please try again.');
      console.error('Error registering user:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Register</button>
      </form>

      {/* Show success or error message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserRegistration;

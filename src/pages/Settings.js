import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../pages/Settings.css';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { username, email, firstName, lastName, dateOfBirth, country, notificationsEnabled });
  };

  return (
    <div className="settings-background">
      <Sidebar />
    <div className="settings-profile-container">
      <h1 className="settings-title">
        Profile Settings&nbsp;
        <FontAwesomeIcon icon={faUserCircle} className="settings-icon" />
      </h1>
      <form onSubmit={handleSubmit}>
      <div className="setting">
          <label className="settings-label">Username:</label>
          <input
            className="settings-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="setting">
          <label className="settings-label">Email:</label>
          <input
            className="settings-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="setting">
          <label className="settings-label">First Name:</label>
          <input
            className="settings-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div className="setting">
          <label className="settings-label">Last Name:</label>
          <input
            className="settings-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        <div className="setting">
          <label className="settings-label">Date of Birth:</label>
          <input
            className="settings-input"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="setting">
          <label className="settings-label">Country:</label>
          <select
            className="settings-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select your country:</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Philippines">Philippines</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <div className="setting">
          <label className="settings-label">Enable Notifications:</label>
          <input
            className="settings-input"
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
          />
        </div>

        <button type="submit" className="settings-button">Save</button>
      </form>
    </div>
    </div>
  );
};

export default Settings;
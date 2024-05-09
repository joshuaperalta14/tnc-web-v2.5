import React from 'react';
import './Support.css';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";

class Support extends React.Component {
  render() {
    return (
      <div className="support-background">
        <div className="support-wrapper">
          <div className="support-app">
            <h1 className="support-title">How can we help you?</h1>
            <div className="support-card-container">
              <div className="card" onClick={() => alert('Clicked Account Settings')}>
              <FaUser className='support-icon'/>
                <p className="support-label">Account</p>
              </div>
              <div className="card" onClick={() => alert('Clicked Password Reset')}>
              <FaKey className='support-icon'/>
                <p className="support-label">Password</p>
              </div>
              <div className="card" onClick={() => alert('Clicked Contact Settings')}>
              <FaEnvelope className='support-icon'/>
                <p className="support-label">Contact</p>
              </div>
            </div>
            <div>
              <h3 style={{ marginTop: '30px'}}>
                <Link to="/" className="support-home">↩&nbsp;Back to Home</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;

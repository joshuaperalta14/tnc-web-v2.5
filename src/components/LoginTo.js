import React from 'react';
import './LoginTo.css';
import { Link } from 'react-router-dom';

const LoginTo = () => {
  return (
    <div className="log-into-background">
    <div className="log-into-wrapper">
        <form action="">
            <h2 className="log-into-label">Please login first to continue</h2>
            <Link to="/login"> 
              <button type="submit">Go to Login</button>
            </Link>
        </form>
    </div>
    </div>
  )
}

export default LoginTo;

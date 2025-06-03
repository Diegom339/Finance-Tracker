import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Finance Tracker</h1>
      <p className="lead">Track your income, expenses, and manage your finances all in one place.</p>
      <Link to="/dashboard" className="btn btn-primary mt-3">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;

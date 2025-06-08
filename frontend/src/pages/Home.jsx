import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container text-center">
      <h1 className="display-4 mb-4">Welcome to Finance Tracker</h1>
      <p className="lead mb-5">Easily manage your budget, track expenses, and reach your financial goals.</p>

      <div className="d-flex justify-content-center gap-3 mb-5">
        <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
        <Link to="/login" className="btn btn-outline-secondary btn-lg">Login</Link>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <h3>📊 Dashboard</h3>
          <p>View a summary of your financial activity in one place.</p>
        </div>
        <div className="col-md-4">
          <h3>💸 Transactions</h3>
          <p>Track your income and expenses with ease.</p>
        </div>
        <div className="col-md-4">
          <h3>📁 Export</h3>
          <p>Download your data and analyze it offline whenever you like.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Job Candidates</h1>
      <p className="home-description">
        Explore a diverse pool of talented individuals ready for exciting job opportunities.
      </p>
      <p className="home-more-info">
        Check the <Link to="/users">Candidates page</Link> to know more about the available candidates.
      </p>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './page-not-found.scss';

const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go back to homepage</Link>
    </div>
  );
};

export default PageNotFound;
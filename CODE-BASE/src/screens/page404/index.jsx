import React from "react";
import "./styles.scss";  // Make sure to import the styles

const Page404 = () => {
  return (
    <div className="page404-container">
      <div className="page404-content">
        <h1 className="page404-title">404</h1>
        <p className="page404-message">Oops! The page you're looking for does not exist.</p>
        <a href="/auth/login" className="page404-back-link">Go Back to Home</a>
      </div>
    </div>
  );
};

export default Page404;

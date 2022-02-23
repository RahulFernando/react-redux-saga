import React from 'react';
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Redux-Saga Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div>
    <div className="tech-bg">
      <h1>
        <Link to="/blogs?category=tech">TECH</Link>
      </h1>
    </div>
    <div className="design-bg">
      <h1>
        <Link to="/blogs?category=design">DESIGN</Link>
      </h1>
    </div>
  </div>
);

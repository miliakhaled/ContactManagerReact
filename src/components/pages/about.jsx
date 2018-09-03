import React from 'react';

// <h2>{props.match.params.id}</h2>
const about = props => (
  <div>
    <h1 className="display-4">About</h1>
    <p>A simple contact manager application using React js</p>
    <div className="text-muted">Version 1.0.0</div>
  </div>
);

export default about;

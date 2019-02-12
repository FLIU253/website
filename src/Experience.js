import React from 'react';
import './Experience.css';

const Experience = () => {
  return(
    <div className = "experience">
      <h1 className="text-center p-4">
      EXPERIENCE
      </h1>
      <div className="container pb-4">
      <div className="card mb-5">
      <h5 className="card-header">Featured</h5>
      <div className="card-body"> 
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div className="card mb-5">
    <h5 className="card-header">Featured</h5>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card mb-5">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
    </div>
  );
}

export default Experience;
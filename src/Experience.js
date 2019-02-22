import React from 'react';
import './Experience.css';

const Experience = () => {
  return(
    <div className = "experience" id = "experience">
      <h1 className="text-center p-4">
      EXPERIENCE
      </h1>
      <div className="container pb-4">
      <div className="card mb-5">
      <h5 className="card-header">Autodata Solutions</h5>
      <div className="card-body"> 
        <h5 className="card-title">Quality Assurance Intern</h5>
        <ul className="card-text"><li>To Be Determined</li></ul>
        <a href="http://www.autodata.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Comepany Website</a>
        <p class="card-text pt-3"><small class="text-muted">May 2019 - September 2020 | London, Ontario</small></p>
      </div>
    </div>

    <div className="card mb-5">
    <h5 className="card-header">Western University</h5>
    <div className="card-body">
      <h5 className="card-title">Instructional Technology Resource Centre Consultant</h5>
      <ul className="card-text">
      <li>Assisted professors and faculty members by explaining and teaching them how to use different technologies,
      including Western's learning management system</li>
      <li>Created and edited CSS and HTML files for faculty members' course websites to enhance the students'
      learning experience</li>
      <li>Collaborated with colleagues and facult members to produce instructional videos using 
      Adboe Photoshop and Adobe Premiere Pro</li>
      <li>Performed administrative duties, including managing incoming calls, booking appointments, and
      directing clients to the appropriate technical staff for assistance</li>
      </ul>
      <a href="https://itrc.uwo.ca/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Company Website</a>
      <p class="card-text pt-3"><small class="text-muted">May 2018 - April 2019 | London, Ontario</small></p>
    </div>
  </div>

    </div>
    </div>
  );
}

export default Experience;
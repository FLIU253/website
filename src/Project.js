import React from 'react';
import './Project.css';

const Project = () => {
  return(
    <div>
    <h1 className="text-center p-1" id = "project">
    PROJECTS
    </h1>

   <div className="container pb-4">
   <div className="card-deck">
   <div className="card">
     <img className="card-img-top" src="..." alt="Card cap"/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     </div>
     <div className="card-footer">
       <small className="text-muted">Last updated 3 mins ago</small>
     </div>
   </div>
   <div className="card">
     <img className="card-img-top" src="..." alt="Card cap"/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
     </div>
     <div className="card-footer">
       <small className="text-muted">Last updated 3 mins ago</small>
     </div>
   </div>
   <div className="card">
     <img className="card-img-top" src="..." alt="Card cap"/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     </div>
     <div className="card-footer">
       <small className="text-muted">Last updated 3 mins ago</small>
     </div>
   </div>
 </div>
 </div>

    </div>
  );
}
export default Project;
import React from 'react';
import './Skill.css';
import CSS from './images/CSS.png';
import HTML5 from './images/HTML5.png';
import BLOGO from './images/bootstrap.png';
import RLogo from './images/React.png';
import angular from './images/angular.png';
import mongodb from './images/mongodb.png';
import node from './images/node.png';
import mysql from './images/mysql.png';
import java from './images/Java.png';
import javascript from './images/javascript.png';
import python from './images/python.png';
import cplus from './images/c++.png';

const Skill = () =>{
  return(
    <div className = "skill" id = "skill">
      <h1 className="text-center p-4">
      SKILLS
      </h1>

     <div className="container pb-5">
     <div className="card mb-3">
     <div className="card-header">
       <h3>Frontend</h3>
     </div>
     <div className="card-body">
       <blockquote className="blockquote mb-0">
         <div className="container">
         <div className="row">
         <div className="col">
          <img src={CSS} alt="Bootstrap logo"/>
         </div>
         <div className="col">
         <img src={HTML5} alt="HTML5 logo"/>
         </div>
         <div className="col">
         <img src={BLOGO} alt="bootstrap logo"/>
         </div>
         <div className="col">
         <img src={RLogo} alt="react logo"/>
         </div>
         <div className="col">
         <img src={angular} alt="angular logo"/>
         </div>
         </div>
         </div>
       </blockquote>
     </div>
   </div>

   <div className="card">
   <div className="card-header">
     <h3>General Purpose</h3>
   </div>
   <div className="card-body">
     <blockquote className="blockquote mb-0">
       <div className="container">
       <div className="row">
       <div className="col">
       <img src={java} alt="java logo"/>
       </div>
       <div className="col">
       <img src={javascript} alt="javascript logo"/>
       </div>
       <div className="col">
       <img src={python} alt="python logo"/>
       </div>
       <div className="col">
       <img src={cplus} alt="c++ logo"/>
       </div>
       </div>
       </div>
     </blockquote>
   </div>
 </div>

 <div className="card">
 <div className="card-header">
   <h3>Backend</h3>
 </div>
 <div className="card-body">
   <blockquote className="blockquote mb-0">
     <div className="container">
     <div className="row">
     <div className="col">
     <img src={node} alt="node logo"/>
     </div>
     <div className="col">
     <img src={mysql} alt="mysql logo"/>
     </div>
     <div className="col">
     <img src={mongodb} alt="mongodb logo"/>
     </div>
     </div>
     </div>
   </blockquote>
 </div>
</div>

   </div>

    </div>
  );
}

export default Skill;
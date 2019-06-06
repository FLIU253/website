//Interest in the form of a photo gallery
import React, { Component } from "react";
import './Interest.css';
class Interest extends Component {
  render() {
    return (
        <div className = "system p-5" id = "article">
          <div className="text-center p-4 interest" data-aos="zoom-out-down">
          <h2 className = "fancy-header text-center "><strong>This is My System</strong></h2>
          </div>
         <div className = "article-section mb-3" data-aos="zoom-out-down">
         <a className = "article-link"  href="https://adityabhavsar.com/pursue-passions-not-paychecks/" rel="noopener noreferrer" target="_blank" >
           Pursue passions, not paycheques</a>
         </div>
         <div className = "article-section mb-3" data-aos="zoom-out-down">
         <a className = "article-link"  href="https://www.mentalhealth.gov/basics/what-is-mental-health" rel="noopener noreferrer" target="_blank" >
           Mental health matters</a>
         </div>
         <div className = "article-section mb-3" data-aos="zoom-out-down">
         <a className = "article-link"  href="https://www.healthyplace.com/blogs/buildingselfesteem/2015/09/why-self-care-is-important-for-your-mental-physical-health" rel="noopener noreferrer" target="_blank" >
            Self care is important</a>
         </div>
        </div>
    );
  }
}
export default Interest;

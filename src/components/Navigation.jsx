import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="assets/images/ailogo.png"  alt=""/>
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>


          <div  class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              
            <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>


              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  How to Use
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Tools & API
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Pricing
                </Link>
              </li>

              <li class="nav-item">
              <div class="dropdown">
                <img src="assets/images/signup-09.png"/>
                   <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
               </div>
             </div>

           </li>
              
            </ul>
            

          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
           <nav  id="site_navbar">
                  <ul className="container">
                      <li><Link className="site_heading" to="/">Send-IT</Link></li>
                      <li className="home" id="site_home"><a href="#" className="active">Home</a></li>
                      <li><Link  to="/signup">SignUp</Link></li>
                      <li ><Link  to="login">Login</Link></li>
                  </ul> 
                  <h4 className="site_heading_small_device">Send-IT</h4>
                  <ul className="smaller_screen">
                      
                      <li>
                          <img  src="../../img/Hamburger_icon.svg.png"  className="dropbtn"/>
                          <div id="myDropdown" className="dropdown-content">
                              <a id="site_home" href="#">Home</a>
                              <a id="register" href="#">SignUp</a>
                              <a id="enter_account" href="#">Login</a>
                          </div>
                  </li>
                  </ul>
              </nav>   
      </div>
    )
  }
}

export default connect(null, {})(Navbar);

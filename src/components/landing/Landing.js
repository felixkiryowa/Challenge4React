import React, { Component } from 'react'
import '../../../public/dest/style.css'

class Landing extends Component {
  render() {
    return (
      <div>
         <nav  id="site_navbar">
            <ul className="container">
                <li><a className="site_heading">Send-IT</a></li>
                <li className="home" id="site_home"><a href="#" className="active">Home</a></li>
                <li><a href="#" id="register" >SignUp</a></li>
                <li id="enter_account"><a href="#" >Login</a></li>
            </ul> 
            <h4 className="site_heading_small_device">Send-IT</h4>
            <ul className="smaller_screen">
                
                <li>
                    <img  src="../../img/Hamburger_icon.svg.png" onclick="DropDown()" className="dropbtn"/>
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

export default  Landing

import React, { Component } from 'react';
import {connect} from 'react-redux';

class Login extends Component {

  render() {
    return (
        <div className="loginBox" id="site_login_form">
            <h1 className="login_header">Login Here</h1>
            <p align="center" id="login_error_message" className="login_error_message"></p>
            <form>
                <p>Username</p>
                <input type="email" name="user_name" id="user_name" placeholder="Enter Username"/>
                <p>Password</p>
                <input type="password" id="user_password" name="user_password" placeholder="Enter Password"/>
            </form>
            <br></br>
            <br></br>
            <button className="submit_button" onclick="authenticateusers()">Login</button>
            <br></br>
            <br></br>
        </div>
    
    )
  }
}

export default connect(null, {})(Login);

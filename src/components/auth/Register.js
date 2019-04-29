import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Register extends Component {
  render() {
     
    // const isValidEmail = this.state.email.length > 3;
   
    console.log(typeof(this.props.data.newuser.username));
    console.log(this.props.data.newuser.username.length);
    return (
            <div className="wrapper signup_div" style={{marginTop:'100px'}}>
                <header className="header">Sign Up Here</header>
                <div  style={{paddingLeft:'5px'}}>
                    <p align="center" id="success_message"></p>
                </div>
                <form onSubmit={this.props.data.handleSubmit}>
                    <article className="main">
                        <div style={{width:'40%'}}>
                            <p>Email Address</p>
                            <input type="email" name="email_address" value={this.props.data.newuser.email} 
                            onChange={this.props.data.handleEmailChange}  placeholder="Enter Email Address" />
                            <p>Username</p>
                            <input type="text" name="username" value={this.props.data.newuser.username} 
                            onChange={this.props.data.handleUsernameChange}  placeholder="Enter Username" />
                            {this.props.data.errors.username && (<div style={{color:'red'}}>{this.props.data.errors.username}</div>)}
                            <p>Password</p>
                            <input type="password" name="password" value={this.props.data.newuser.user_password} 
                            onChange={this.props.data.handlePasswordChange} placeholder="Enter Password" />
                            <p>Confirm Password</p>
                            <input type="password" name="confirm_password" value={this.props.data.newuser.confirm_password} 
                            onChange={this.props.data.handleConfirmPasswordChange} placeholder="Re-Enter Password" />
                        </div>
                        <div style={{width:'40%'}}>
                        <p>First Name</p>
                            <input type="text" name="firstname"  value={this.props.data.newuser.first_name} 
                            onChange={this.props.data.handleFirstnameChange} placeholder="Enter First Name" />
                            <p>Last Name</p>
                            <input type="text" name="lastname" value={this.props.data.newuser.last_name} 
                            onChange={this.props.data.handleLastnameChange}  placeholder="Enter Last Name" />
                            <p>Contact</p>
                            <input type="text" name="contact" value={this.props.data.newuser.phone_contact} 
                            onChange={this.props.handleContactChange} placeholder="Enter Contact" />
                        </div>
                    </article>
                    <footer className="footer">
                        <p align="center"><button className="signup_submit_button" type="submit" >Signup</button></p>
                   </footer> 
               </form>

      </div>
      
    )
  }
}

export default connect(null, {})(Register);
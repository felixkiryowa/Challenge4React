import React, { Component } from 'react'
import {connect} from 'react-redux';
import Register from './Register';


class registerContainer extends Component {

   constructor() {
       super();
       this.state = {
            email:'',
            username:'',
            password:'',
            confirm_password:'',
            firstname:'',
            lastname:'',
            contact:'',
            errors: {

            }

       }
   }

   handleEmailChange = (event) => {
    this.setState({email: event.target.value});
   }
   handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
    const username = this.state.username;
    const isValidUserName = username.length > 2;
    if(isValidUserName){
       this.setState({
           errors:{}
       })
    }else {
      this.setState({
          errors:{
              username:"Username must be longer than 3 characters"
          }
      })
    }

   }
   handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
   }
   handleConfirmPasswordChange = (event) => {
    this.setState({confirm_password: event.target.value});
   }
   handleFirstnameChange = (event) => {
    this.setState({firstname: event.target.value});
   }
   handleLastnameChange = (event) => {
    this.setState({lastname: event.target.value});
   }
   handleContactChange = (event) => {
    this.setState({contact: event.target.value});
   }

   handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        "first_name":this.state.firstname,
        "last_name":this.state.lastname,
        "email":this.state.email,
        "phone_contact":this.state.phone_contact,
        "username": this.state.username,
        "user_password": this.state.password,
        "user_type":"user"   
    }

 console.log(newUser);
   
}

  render() {


    const newUser = {
        "first_name":this.state.firstname,
        "last_name":this.state.lastname,
        "email":this.state.email,
        "phone_contact":this.state.phone_contact,
        "username": this.state.username,
        "user_password": this.state.password,
        "confirm_password":this.state.confirm_password
    }
      const data_props = {
          handleSubmit:this.handleSubmit,
          handleLastnameChange:this.handleLastnameChange,
          handleContactChange:this.handleContactChange,
          handleFirstnameChange:this.handleFirstnameChange,
          handleConfirmPasswordChange:this.handleConfirmPasswordChange,
          handlePasswordChange:this.handlePasswordChange,
          handleUsernameChange:this.handleUsernameChange,
          handleEmailChange:this.handleEmailChange,
          newuser:newUser,
          errors:this.state.errors
      }
    return (
      <div>
           <Register  data={data_props} />
      </div>
    )
  }
}


export default  connect(null, {})(registerContainer)


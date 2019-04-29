import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Welcome extends Component {
  render() {
    return (
      <div>
          <section  id="site_section" className="sec1">
              <div className="centered">
                <div className="show_text_on_top_of_image">
                  <h1 align="center">Your Welcome</h1>
                  <h1 align="center">To</h1>
                  <h1 align="center">SendIT</h1>
                  <br></br>
                  <p align="center" className="slogan">Sit Back And Relax And Watch Us As We Deliver Your Order</p>
                  <p align="center" className="slogan">Reach US :+257098976</p> 
                  <p align="center" className="slogan">Email : info@sendit.ug</p>  
                </div>
              </div>
          </section>
        
      </div>
    )
  }
} 

export default connect(null, {})(Welcome);

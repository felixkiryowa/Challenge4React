import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from './Welcome';
import BaseContent from './BaseContent';


class Landing extends Component {
  render() {
    return (
      <div>
          <Welcome/>
          <br></br>
          <br></br>
          <BaseContent/> 
      </div>
    )
  }
}

export default  connect(null, {})(Landing)

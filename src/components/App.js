import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Provider} from  'react-redux';
import store from '../store'; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage  from '../components/landing/Landing';
import Login from '../components/auth/Login';
import registerContainer from '../components/auth/registerContainer';
import Navbar from '../components/landing/Navbar';



export class App extends Component {

    render() {
      
        return(
            <Provider store={store }>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={registerContainer} />
                    </div>
                </Router>
            </Provider>
        )
       
    }
}

export default App;
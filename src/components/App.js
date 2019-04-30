import React, {Component} from 'react';
import {Provider} from  'react-redux';
import store from '../store'; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage  from '../components/landing/Landing';
import Login from '../components/auth/Login';
import registerContainer from '../components/auth/registerContainer';
import Navbar from '../components/landing/Navbar';
import '../../public/dest/style.css';



export class App extends Component {

    render() {
      
        return(
            <div className="App">
                <Provider store={store }>
                    <Router>
                        <Navbar />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={registerContainer} />
                    </Router>
                </Provider>
            </div>
        )
       
    }
}

export default App;
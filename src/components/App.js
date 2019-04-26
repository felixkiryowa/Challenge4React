import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Provider} from  'react-redux';
import store from '../store'; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage  from '../components/landing/Landing';



export class App extends Component {

    render() {
      
        return(
            <Provider store={store }>
                <Router>
                    <div className="App"> 
                    <Route exact path="/" component={LandingPage} />
                    {/* <div className="container">
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path="/posts" component={ListItem} />
                    </div> */}
                    
                    </div>
                </Router>
            </Provider>
        )
       
    }
}

export default App;
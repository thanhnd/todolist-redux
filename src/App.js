import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Secret from './Pages/Secret';
import Notfound from './Pages/Notfound';
import ModalTask from './Pages/ModalTask';

import Main from './Pages/Main';
import Callback from './Pages/Callback';
import Navbar from './Components/Navbar';

class App extends Component {
    render() { 
        
        return (
            <Router>
                <div className="App">

                    <Navbar {...this.props}/>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/secret" exact component={Secret} />
                        <Route path="/callback" exact component={Callback} />
                        <Route path="/add-task" exact component={ModalTask} />
                        <Route path="/edit-task/:i" exact component={ModalTask} />
                        <Route component={Notfound} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;

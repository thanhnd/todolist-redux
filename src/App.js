import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


import Navbar from './Components/Navbar';
import Routes from './Routes';

class App extends Component {
    render() {

        return (
            <Router>
                <div className="App">
                    <Navbar {...this.props}/>
                    <Routes {...this.props}/>
                </div>
            </Router>
        );
    }
}

export default App;

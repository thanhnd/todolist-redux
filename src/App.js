import React, { Component } from 'react';
import './App.css';



// Data
import listOfTasks from './Models/TaskModel/TaskModel';
import Secret from './Components/Secret';
import Notfound from './Components/Notfound';
import Main from './Components/Main';
import Callback from './Components/Callback';

class App extends Component {
    render() {
        let mainComponent = ""
        switch (this.props.location) {
            case "":
                mainComponent = <Main {...this.props} />
                break
            case "secret":
                mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <Main {...this.props}/>
                break
            case "callback":
                mainComponent = <Callback {...this.props} />
                break
            default:
                mainComponent = <Notfound />
        }
        return (
            
            <div className="App">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.props.auth.logout}>Logout</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                {mainComponent}
            </div>
        );
    }
}

export default App;

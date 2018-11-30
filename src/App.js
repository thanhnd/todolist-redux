import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


// Data
import listOfTasks from './Models/TaskModel/TaskModel';
import Secret from './Pages/Secret';
import Notfound from './Pages/Notfound';
import ModalTask from './Pages/ModalTask';

import Main from './Pages/Main';
import Callback from './Pages/Callback';

class App extends Component {
    render() {
        // let mainComponent = ""
        // switch (this.props.location) {
        //     case "":
        //         mainComponent = <Main {...this.props} />
        //         break
        //     case "secret":
        //         mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <Main {...this.props}/>
        //         break
        //     case "callback":
        //         mainComponent = <Callback {...this.props} />
        //         break
        //     default:
        //         mainComponent = <Notfound />
        // }
        return (
            <Router>
                <div className="App">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    {this.props.auth.isAuthenticated() ?
                                        <Link className="nav-link" to="/" onClick={this.props.auth.logout}>Logout</Link> :
                                        <Link className="nav-link" to="/" onClick={this.props.auth.login}>Login</Link>
                                    }
                                </li>
                                <li>
                                {this.props.auth.isAuthenticated() &&
                                        <Link className="nav-link" to="/secret" onClick={this.props.auth.logout}>Secret</Link>
                                }
                                </li>
                            </ul>
                        </div>
                    </nav>
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

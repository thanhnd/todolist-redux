import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Secret from './Pages/Secret';
import Notfound from './Pages/Notfound';
import ModalTask from './Pages/ModalTask';

import Main from './Pages/Main';
import Callback from './Pages/Callback';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => <Main {...this.props} />} />
                <Route
                    path="/secret"
                    exact
                    render={() => this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <Notfound />} />
                <Route
                    path="/callback"
                    exact
                    render={() => <Callback />} />
                <Route
                    path="/add-task"
                    exact
                    render={() => <ModalTask />} />
                <Route
                    path="/edit-task/:id"
                    exact
                    render={({match}) => <ModalTask match={match}/>} />
                <Route
                    render={() => <Notfound />} />
            </Switch>
        );
    }
}

export default Routes;
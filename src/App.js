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
                mainComponent = <Secret />
                break
            case "callback":
                mainComponent = <Callback {...this.props} />
                break
            default:
                mainComponent = <Notfound />
        }
        return (

            <div className="App">
                {mainComponent}
            </div>
        );
    }
}

export default App;

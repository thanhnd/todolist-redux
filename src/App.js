import React, { Component } from 'react';
import './App.css';



// Data
import listOfTasks from './Models/TaskModel/TaskModel';
import Secret from './Components/Secret';
import Notfound from './Components/Notfound';
import Main from './Components/Main';

class App extends Component {
    render() {
        let mainComponent = ""
        switch (this.props.location) {
            case "":
                mainComponent = <Main />
                break
            case "secret":
                mainComponent = <Secret />
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

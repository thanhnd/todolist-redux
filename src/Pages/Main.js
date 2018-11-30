import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <button className="btn btn-primary"
                    >Login</button>
            </div>
        );
    }
}

export default Main;
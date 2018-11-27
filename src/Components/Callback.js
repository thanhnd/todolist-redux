import React, { Component } from 'react';

class Callback extends Component {

    componentDidMount() {
        this.props.auth.handleAuthentication()
    }

    render() {
        return (
            <div>
                <h1>Loading ...</h1>  
            </div>
        );
    }
}

export default Callback;
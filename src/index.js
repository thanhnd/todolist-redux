import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import Auth from './Auth';

const auth = new Auth()

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let state = {}

window.setState = (initialState) => {
    state = Object.assign({}, state, initialState)

    ReactDOM.render(
        <Provider store={store} >
            <App {...state}/>
        </Provider>
        , document.getElementById('root'));
}

console.log(auth.getProfile())
let name = auth.getProfile().given_name || auth.getProfile().nickname || "World"

let initialState = {
    name,
    location: window.location.pathname.replace(/^\/?/g, ""),
    auth
}

window.setState(initialState)

registerServiceWorker();

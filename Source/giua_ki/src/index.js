import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducers'
import { firebase } from './Firebase/fbConfig'
import { reactReduxFirebase } from 'react-redux-firebase'

const rrfConfig = {
    userProfile: 'users',
}

const createStoreWithFirebase = compose (
    reactReduxFirebase(firebase,rrfConfig),

)(createStore)

const store = createStoreWithFirebase(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
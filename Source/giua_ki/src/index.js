import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducers'
import thunk from 'redux-thunk'
import { firebase } from './Firebase/fbConfig'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { setAuth } from './Actions';

const auth = firebase.auth();

const store = createStore(reducer, applyMiddleware(thunk));
// compose(
//     applyMiddleware(thunk),
//     // reactReduxFirebase(firebase),
// ));

// auth.onAuthStateChanged((user) => {
//     if(user) {
//         store.dispatch(setAuth(user,null));
//     }
// });

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
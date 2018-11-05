import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {isEmpty,isLoaded} from 'react-redux-firebase'
 
const PrivateRoute = ({
    auth,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} render={(props) => {
            if(isLoaded(auth)){
                if(!isEmpty(auth))  return <Component {...props} />
                else
                    return <Redirect to="/"/>
            }
            else return null;
        }} />
    );
 
const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
});
 
export default connect(mapStateToProps)(PrivateRoute);
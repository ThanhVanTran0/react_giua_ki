import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} component={(props) => {
            if (isAuthenticated != null) {
                return (
                    <Component {...props} />
                );
            } else {
                return (
                    <Redirect to='/' />
                );
            }
        }} />
    );
 
const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.user
});
 
export default connect(mapStateToProps)(PrivateRoute);
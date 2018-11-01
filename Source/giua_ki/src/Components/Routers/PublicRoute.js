import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} component={(props) => {
            if (isAuthenticated != null) {
                return (
                    <Redirect to='/chat' />
                );
            } else {
                return (
                    <Component {...props} />
                );
            }
        }} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.user
});

export default connect(mapStateToProps)(PublicRoute);
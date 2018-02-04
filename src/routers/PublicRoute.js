import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => (
  <Route {...restProps} component={(props) => {
    if(isAuthenticated) {
      return (
        <Redirect to="/dashboard" />
      );
    } else {
      return (
        <div>
          <Component {...props} />
        </div>
      );
    }
  }} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
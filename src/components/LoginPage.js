import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../thunks/auth';

import GoogleLogo from '../images/google-logo.png';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense-ify</h1>
      <p>It&apos;s time to get your expenses under control.</p>
      <button className="button simple signin-button valign-wrapper center-align" onClick={startLogin}>
        <span className="signin-button__icon valign-wrapper">
          <img alt="google-logo" src={GoogleLogo} />
        </span>
        <span className="signin-button__content">
          Login with Google
        </span>
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);

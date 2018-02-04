import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../thunks/auth';

export const Header = ({ startLogout }) => (
  <header>
    <span>Expensify</span> |
    <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink> |
    <NavLink to="/create" activeClassName="is-active">Create</NavLink> | 
    <button onClick={startLogout} >Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

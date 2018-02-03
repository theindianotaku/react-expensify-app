import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../thunks/auth';

export const Header = ({ startLogout }) => (
  <header>
    <span>Expensify</span> |
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
    <NavLink to="/create" activeClassName="is-active">Create</NavLink> |
    <NavLink to="/help" activeClassName="is-active">Help</NavLink> | 
    <button onClick={startLogout} >Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

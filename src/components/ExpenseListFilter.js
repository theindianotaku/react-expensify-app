import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters';

const ExpenseListFilter = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);

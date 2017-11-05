const defaultState = [];

// state = state.expenses
const expensesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
  }
};

export default expensesReducer;

import { addExpense, editExpense, removeExpense, setExpenses } from '../actions/expenses';
import database from '../firebase/firebase';

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        
        dispatch(setExpenses(expenses));
      });
  };
};

export const startRemoveExpense = ({ id }) => {
  return (dispatch) => {
    return database.ref(`expenses/${ id }`).remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${ id }`).update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};
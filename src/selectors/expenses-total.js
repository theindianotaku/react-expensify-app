const getExpensesTotal = (expenses = []) => {
  const amountArr = expenses.map((expense) => expense.amount);
  const addReducer = (accumulator, currentValue) => accumulator + currentValue;

  return amountArr.reduce(addReducer, 0);
};

export default getExpensesTotal;

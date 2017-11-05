const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate}
) => {
  const filteredExpense = expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });

  const sortedExpense = filteredExpense.sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
    return 0;
  });

  return sortedExpense;
};

export default getVisibleExpenses;

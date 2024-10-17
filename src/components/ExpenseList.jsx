import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import AmountSorter from './AmountSorter';

const ExpenseList = ({ data }) => {
  const [expenseCategoryFilter, setExpenseCategoryFilter] = useState({});
  const [sortOrder, setSortOrder] = useState(null);
  const [showExpenseFilter, setShowExpenseFilter] = useState(false);
  const [showExpenseSorter, setShowExpenseSorter] = useState(false);

  const expenseCategories = ['Rent', 'Education', 'Health'];

  const formatDate = (dateStr) => {
    if (!dateStr) return 'No Date';
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Filter and sort expense data
  const filteredExpense = data
    .filter(entry => entry.type === 'expense' && expenseCategoryFilter[entry.category] !== false)
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    });

  return (
    <div>
      <h3>Expense Entries</h3>
      <button onClick={() => setShowExpenseFilter(!showExpenseFilter)}>Filter Categories</button>
      <button onClick={() => setShowExpenseSorter(!showExpenseSorter)}>Sort by Amount</button>

      {showExpenseFilter && (
        <CategoryFilter
          categories={expenseCategories}
          onFilterChange={filters => setExpenseCategoryFilter(filters)}
        />
      )}
      {showExpenseSorter && (
        <AmountSorter onSortChange={order => setSortOrder(order)} />
      )}

      <ul>
        {filteredExpense.map(entry => (
          <li key={entry.id}>
            {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;



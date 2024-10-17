import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import AmountSorter from './AmountSorter';

const EntriesList = ({ data }) => {
  const [incomeCategoryFilter, setIncomeCategoryFilter] = useState({});
  const [expenseCategoryFilter, setExpenseCategoryFilter] = useState({});
  const [showIncomeFilter,setShowIncomeFilter] = useState(false);
  const [showIncomeShorter,setShowIncomeShorter] = useState(false);
  const [showExpenseFilter,setShowExpenseFilter] = useState(false);
  const [showExpenseShorter,setShowExpenseShorter] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  const incomeCategories = ['salary', 'bill', 'outsource'];
  const expenseCategories = ['rent', 'education', 'health'];

  const formatDate = (dateStr) => {
    if (!dateStr) return 'No Date';
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Filtering entries based on selected categories
  const filteredData = data.filter(entry => {
    if (entry.type === 'income') {
      return incomeCategoryFilter[entry.category] !== false;
    } else if (entry.type === 'expense') {
      return expenseCategoryFilter[entry.category] !== false;
    }
    return true;
  });

  // Sorting entries based on amount
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
  });

  return (
    <div>
      <h3>Income Entries</h3>
      <button onClick={() => setShowIncomeFilter(true)}>Filter Categories</button>
      <button onClick={() => setShowIncomeSorter(true)}>Sort by Amount</button>

      {/* Filter Popup */}
      {showIncomeFilter && (
        <CategoryFilter
          categories={incomeCategories}
          onFilterChange={filters => setIncomeCategoryFilter(filters)}
        />
      )}
      {/* Sorter Popup */}
      {showIncomeSorter && (
        <AmountSorter onSortChange={order => setSortOrder(order)} />
      )}

      <ul>
        {sortedData
          .filter(entry => entry.type === 'income')
          .map(entry => (
            <li key={entry.id}>
              {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
            </li>
          ))}
      </ul>

      <h3>Expense Entries</h3>
      <button onClick={() => setShowExpenseFilter(true)}>Filter Categories</button>
      <button onClick={() => setShowExpenseSorter(true)}>Sort by Amount</button>

      {/* Filter Popup */}
      {showExpenseFilter && (
        <CategoryFilter
          categories={expenseCategories}
          onFilterChange={filters => setExpenseCategoryFilter(filters)}
        />
      )}
      {/* Sorter Popup */}
      {showExpenseSorter && (
        <AmountSorter onSortChange={order => setSortOrder(order)} />
      )}

      <ul>
        {sortedData
          .filter(entry => entry.type === 'expense')
          .map(entry => (
            <li key={entry.id}>
              {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EntriesList;

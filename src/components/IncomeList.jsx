import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import AmountSorter from './AmountSorter';

// const IncomeList = ({ data }) => {
//   const [incomeCategoryFilter, setIncomeCategoryFilter] = useState({});
//   const [sortOrder, setSortOrder] = useState(null);
//   const [showIncomeFilter, setShowIncomeFilter] = useState(false);
//   const [showIncomeSorter, setShowIncomeSorter] = useState(false);

//   const incomeCategories = ['Salary', 'Bill', 'Outsource'];

//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'No Date';
//     const dateObj = new Date(dateStr);
//     const day = dateObj.getDate();
//     const month = dateObj.toLocaleString('default', { month: 'long' });
//     const year = dateObj.getFullYear();
//     return `${day} ${month} ${year}`;
//   };

//   // Filter and sort income data
//   const filteredIncome = data
//     .filter(entry => entry.type === 'income' && incomeCategoryFilter[entry.category] !== false)
//     .sort((a, b) => {
//       if (!sortOrder) return 0;
//       return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
//     });

//   return (
//     <div>
//       <h3>Income Entries</h3>
//       <button onClick={() => setShowIncomeFilter(!showIncomeFilter)}>Filter Categories</button>
//       <button onClick={() => setShowIncomeSorter(!showIncomeSorter)}>Sort by Amount</button>

//       {showIncomeFilter && (
//         <CategoryFilter
//           categories={incomeCategories}
//           onFilterChange={filters => setIncomeCategoryFilter(filters)}
//         />
//       )}
//       {showIncomeSorter && (
//         <AmountSorter onSortChange={order => setSortOrder(order)} />
//       )}

//       <ul>
//         {filteredIncome.map(entry => (
//           <li key={entry.id}>
//             {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


//worked
// const IncomeList = ({ data }) => {
//   const [incomeCategoryFilter, setIncomeCategoryFilter] = useState({});
//   const [sortOrder, setSortOrder] = useState(null);
//   const [showIncomeFilter, setShowIncomeFilter] = useState(false);
//   const [showIncomeSorter, setShowIncomeSorter] = useState(false);

//   const incomeCategories = ['Salary', 'Bill', 'Outsource'];

//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'No Date';
//     const dateObj = new Date(dateStr);
//     const day = dateObj.getDate();
//     const month = dateObj.toLocaleString('default', { month: 'long' });
//     const year = dateObj.getFullYear();
//     return `${day} ${month} ${year}`;
//   };

//   // Filter and sort income data
//   const filteredIncome = data
//     .filter(entry => entry.type === 'income' && incomeCategoryFilter[entry.category] !== false)
//     .sort((a, b) => {
//       if (!sortOrder) return 0;
//       return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
//     });

//   return (
//     <div>
//       <h3>Income Entries</h3>
//       <button onClick={() => setShowIncomeFilter(!showIncomeFilter)}>Filter Categories</button>
//       <button onClick={() => setShowIncomeSorter(!showIncomeSorter)}>Sort by Amount</button>

//       {showIncomeFilter && (
//         <CategoryFilter
//           categories={incomeCategories}
//           onFilterChange={filters => setIncomeCategoryFilter(filters)}
//         />
//       )}
//       {showIncomeSorter && (
//         <AmountSorter onSortChange={order => setSortOrder(order)} />
//       )}

//       <ul>
//         {filteredIncome.map(entry => (
//           <li key={entry.id}>
//             {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// updated
const IncomeList = ({ data ,onDelete, onEdit}) => {
  const [incomeCategoryFilter, setIncomeCategoryFilter] = useState({});
  const [sortOrder, setSortOrder] = useState(null);
  const [showIncomeFilter, setShowIncomeFilter] = useState(false);
  const [showIncomeSorter, setShowIncomeSorter] = useState(false);

  const incomeCategories = ['Salary', 'Bill', 'Outsource'];

  const formatDate = (dateStr) => {
    if (!dateStr) return 'No Date';
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Filter and sort income data
  const filteredIncome = data
    .filter(entry => entry.type === 'income' && incomeCategoryFilter[entry.category] !== false)
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    });

  return (
    <div>
      <h3>Income Entries</h3>
      <button onClick={() => setShowIncomeFilter(!showIncomeFilter)}>Filter Categories</button>
      <button onClick={() => setShowIncomeSorter(!showIncomeSorter)}>Sort by Amount</button>

      {showIncomeFilter && (
        <CategoryFilter
          categories={incomeCategories}
          onFilterChange={filters => setIncomeCategoryFilter(filters)}
        />
      )}
      {showIncomeSorter && (
        <AmountSorter onSortChange={order => setSortOrder(order)} />
      )}

      <ul>
        {filteredIncome.map(entry => (
          <li key={entry.id}>
            {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
            <button onClick={() => onDelete(entry.id)}>Delete</button>
            <button onClick={() => onEdit(entry)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IncomeList;
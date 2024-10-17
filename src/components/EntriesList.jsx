import { useState } from "react";
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
const EntriesList = ({ data }) => {
//   // previous 
//     //const [sortOrder, setSortOrder] = useState(null);

//    // const [showIncomeFilter,setShowIncomeFilter] = useState(false);
//     const formatDate = (dateStr) => {
//       if (!dateStr) return 'No Date';
//       const dateObj = new Date(dateStr);
//       const day = dateObj.getDate();
//       const month = dateObj.toLocaleString('default', { month: 'long' });
//       const year = dateObj.getFullYear();
//       return `${day} ${month} ${year}`;
//     };
  
//     return (
//       <div>
//         <h3>Income Entries</h3>
//         <ul>
//           {data
//             .filter(entry => entry.type === 'income')
//             .map(entry => (
//               <li key={entry.id}>
//                 {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
//               </li>
//             ))}
//         </ul>
  
//         <h3>Expense Entries</h3>
//         <ul>
//           {data
//             .filter(entry => entry.type === 'expense')
//             .map(entry => (
//               <li key={entry.id}>
//                 {formatDate(entry.date)} - {entry.category}: ${entry.amount.toFixed(2)}
//               </li>
//             ))}
//         </ul>
//       </div>
//     );








  return (
    <div>
      <IncomeList data={data} />
      <ExpenseList data={data} />
    </div>
  );




  };
  
  export default EntriesList;
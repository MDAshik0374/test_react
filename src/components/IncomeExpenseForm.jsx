//import { useState } from 'react';
//worked
// const IncomeExpenseForm = ({ onAddEntry }) => {
//   const [type, setType] = useState('income');
//   const [amount, setAmount] = useState('');
//   const [incomeCategory, setIncomeCategory] = useState('Salary');
//   const [expenseCategory, setExpenseCategory] = useState('rent');
//   const [date, setDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (amount) {
//       const category = type === 'income' ? incomeCategory : expenseCategory;
//       const newEntry = {
//         id: crypto.randomUUID(),
//         type,
//         category,
//         amount: parseFloat(amount),
//         date,
//       };
//       onAddEntry(newEntry);
//       setAmount('');
//       setIncomeCategory('Salary');
//       setExpenseCategory('rent');
//       setDate('');
//     } else {
//       alert('Please enter an amount');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <div 
//           onClick={() => setType('income')} 
//           className={`tab ${type === 'income' ? 'active' : ''}`}
//           style={{ display: 'inline-block', padding: '10px', cursor: 'pointer', backgroundColor: type === 'income' ? '#ccc' : '#f1f1f1' }}
//         >
//           Income
//         </div>
//         <div 
//           onClick={() => setType('expense')} 
//           className={`tab ${type === 'expense' ? 'active' : ''}`}
//           style={{ display: 'inline-block', padding: '10px', cursor: 'pointer', backgroundColor: type === 'expense' ? '#ccc' : '#f1f1f1' }}
//         >
//           Expense
//         </div>
//       </div>

//       {type === 'income' ? (
//         <div>
//           <label>Category:</label>
//           <select value={incomeCategory} onChange={(e) => setIncomeCategory(e.target.value)}>
//             <option value="Salary">Salary</option>
//             <option value="Bill">Bill</option>
//             <option value="Outsource">Outsource</option>
//           </select>
//         </div>
//       ) : (
//         <div>
//           <label>Category:</label>
//           <select value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)}>
//             <option value="rent">Rent</option>
//             <option value="education">Education</option>
//             <option value="health">Health</option>
//           </select>
//         </div>
//       )}

//       <label>Date:</label>
//       <input 
//         type="date" 
//         value={date} 
//         onChange={(e) => setDate(e.target.value)} 
//         placeholder="Select Date"
//       />

//       <label>Amount:</label>
//       <input 
//         type="number" 
//         value={amount} 
//         onChange={(e) => setAmount(e.target.value)} 
//         required 
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };


//updated

import {useState} from 'react';
const IncomeExpenseForm = ({ onAddEntry, editEntry }) => {
  // Initialize state with default values or values from editEntry if it exists
  const [type, setType] = useState(editEntry ? editEntry.type : 'income');
  const [amount, setAmount] = useState(editEntry ? editEntry.amount : '');
  const [incomeCategory, setIncomeCategory] = useState(editEntry && editEntry.type === 'income' ? editEntry.category : 'Salary');
  //const [expenseCategory, setExpenseCategory] = useState(editEntry && editEntry.type === 'expense' ? editEntry.category : 'rent');
  const [expenseCategory, setExpenseCategory] = useState('rent');
  const [date, setDate] = useState(editEntry ? editEntry.date : '');


  // Reset the form fields
  // const resetForm = () => {
  //   setType('income');
  //   setAmount('');
  //   setIncomeCategory('Salary');
  //   setExpenseCategory('rent');
  //   setDate('');
  // };

  // Modify the handleSubmit to handle both adding and editing entries
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      const category = type === 'income' ? incomeCategory : expenseCategory;
      const newEntry = {
        id: editEntry ? editEntry.id : crypto.randomUUID(),
        type,
        category,
        amount: parseFloat(amount),
        date,
      };
      onAddEntry(newEntry);
      //resetForm();
      // Reset the form after submission (unless in edit mode)
      // if (!editEntry) {
      //   setType('income');
      //   setAmount('');
      //   setIncomeCategory('Salary');
      //   setExpenseCategory('rent');
      //   setDate('');
      // }
      if (!editEntry) {
        setType('income');
        setAmount('');
        setIncomeCategory('Salary');
        setExpenseCategory('rent');
        setDate('');
      }
    } else {
      alert('Please enter an amount');
    }
  };

  //new update
  // if (editEntry && editEntry.id) {
  //   setType(editEntry.type);
  //   setAmount(editEntry.amount);
  //   setIncomeCategory(editEntry.type === 'income' ? editEntry.category : incomeCategory);
  //   setExpenseCategory(editEntry.type === 'expense' ? editEntry.category : expenseCategory);
  //   setDate(editEntry.date);
  // } else {
  //   resetForm();
  // }

   // Change key to reset form when editEntry changes
   //const formKey = editEntry ? editEntry.id : 'new';

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <div 
          onClick={() => setType('income')} 
          className={`tab ${type === 'income' ? 'active' : ''}`}
          style={{ display: 'inline-block', padding: '10px', cursor: 'pointer', backgroundColor: type === 'income' ? '#ccc' : '#f1f1f1' }}
        >
          Income
        </div>
        <div 
          onClick={() => setType('expense')} 
          className={`tab ${type === 'expense' ? 'active' : ''}`}
          style={{ display: 'inline-block', padding: '10px', cursor: 'pointer', backgroundColor: type === 'expense' ? '#ccc' : '#f1f1f1' }}
        >
          Expense
        </div>
      </div>

      {type === 'income' ? (
        <div>
          <label>Category:</label>
          <select value={incomeCategory} onChange={(e) => setIncomeCategory(e.target.value)}>
            <option value="Salary">Salary</option>
            <option value="Bill">Bill</option>
            <option value="Outsource">Outsource</option>
          </select>
        </div>
      ) : (
        <div>
          <label>Category:</label>
          <select value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)}>
            <option value="rent">Rent</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
          </select>
        </div>
      )}

      <label>Date:</label>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        placeholder="Select Date"
      />

      <label>Amount:</label>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required 
      />

      <button type="submit">{editEntry ? 'Update' : 'Submit'}</button>
    </form>
  );
};



export default IncomeExpenseForm;
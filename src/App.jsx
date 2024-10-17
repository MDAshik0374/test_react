
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import IncomeExpenseForm from './components/IncomeExpenseForm';
import Summary from './components/Summery';
import EntriesList from './components/EntriesList';
//worked
// const App = () => {
//   const [data, setData] = useState([]);

//   const handleAddEntry = (entry) => {
//     setData([...data, entry]);
//     console.log(data)
//   };

//   const totalIncome = data
//     .filter(entry => entry.type === 'income')
//     .reduce((acc, curr) => acc + curr.amount, 0);

//   const totalExpenses = data
//     .filter(entry => entry.type === 'expense')
//     .reduce((acc, curr) => acc + curr.amount, 0);

//   const balance = totalIncome - totalExpenses;

//   return (
//     <div>
//       <h2>Income and Expense Tracker</h2>
      
//       <IncomeExpenseForm onAddEntry={handleAddEntry}/>

//       <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />

//       <EntriesList data={data} />
//     </div>
//   );
// };
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';


//updated
const App = () => {
  const [data, setData] = useState([]);
  const [editEntry, setEditEntry] = useState(null);

  // Add new entry or update an existing entry
  // const handleAddEntry = (entry) => {
  //   if (editEntry) {
  //     setData(data.map((item) => (item.id === entry.id ? entry : item)));
  //     setEditEntry(null); // Clear edit mode
  //   } else {
  //     setData([...data, entry]);
  //   }
  // };


  const handleAddEntry = (entry) => {
    if (entry.id && data.some((item) => item.id === entry.id)) {
      // Update an existing entry
      setData(data.map(item => (item.id === entry.id ? entry : item)));
    } else {
      // Add a new entry
      setData([...data, entry]);
    }
    // Clear editEntry after update or add
    setEditEntry(null);
  };


  // Delete an entry by id
  const handleDeleteEntry = (id) => {
    setData(data.filter(entry => entry.id !== id));
  };

  // Set an entry to edit mode
  const handleEditEntry = (entry) => {
    setEditEntry(entry);
  };

  // Calculate totals
  const totalIncome = data
    .filter(entry => entry.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = data
    .filter(entry => entry.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Income and Expense Tracker</h2>
      
      {/* Pass the editEntry prop to initialize the form with current values */}
      <IncomeExpenseForm 
        onAddEntry={handleAddEntry} 
        editEntry={editEntry} 
      />

      <Summary 
        totalIncome={totalIncome} 
        totalExpenses={totalExpenses} 
        balance={balance} 
      />

      {/* Separate Income and Expense lists with delete and edit functionalities */}
      <IncomeList 
        data={data} 
        onDelete={handleDeleteEntry} 
        onEdit={handleEditEntry} 
      />

      <ExpenseList 
        data={data} 
        onDelete={handleDeleteEntry} 
        onEdit={handleEditEntry} 
      />
    </div>
  );
};

export default App

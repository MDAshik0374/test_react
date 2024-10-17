const Summary = ({ totalIncome, totalExpenses, balance }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <h3>Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default Summary;
const AmountSorter = ({ onSortChange }) => {
    return (
      <div className="sort-popup">
        <h3 className="text-sm font-semibold">Sort by Amount</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSortChange('asc'); }}
            className="text-teal-600 hover:text-teal-800"
          >
            Low to High
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onSortChange('desc'); }}
            className="text-teal-600 hover:text-teal-800"
          >
            High to Low
          </a>
        </div>
      </div>
    );
  };
  
  export default AmountSorter;
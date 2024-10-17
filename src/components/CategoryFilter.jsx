import { useState } from 'react';

// const CategoryFilter = ({ categories, onFilterChange }) => {
//   const [selectedCategories, setSelectedCategories] = useState(
//     categories.reduce((acc, category) => ({ ...acc, [category]: true }), {})
//   );

//   const handleCheckboxChange = (category) => {
//     const updatedSelection = {
//       ...selectedCategories,
//       [category]: !selectedCategories[category],
//     };
//     setSelectedCategories(updatedSelection);
//     onFilterChange(updatedSelection);
//   };

//   return (
//     <div className="filter-popup">
//       <h3 className="text-sm font-semibold">Filter by Category</h3>
//       {categories.map((category) => (
//         <label key={category} className="block text-sm">
//           <input
//             type="checkbox"
//             checked={selectedCategories[category]}
//             onChange={() => handleCheckboxChange(category)}
//             className="mr-2"
//           />
//           {category.charAt(0).toUpperCase() + category.slice(1)}
//         </label>
//       ))}
//     </div>
//   );
// };


// const CategoryFilter = ({ categories, onFilterChange }) => {
//     const [selectedCategories, setSelectedCategories] = useState(
//       categories.reduce((acc, category) => ({ ...acc, [category]: true }), {})
//     );
  
//     // "All" checkbox state
//     const [selectAll, setSelectAll] = useState(true);
  
//     // Handle checkbox change for individual categories
//     const handleCheckboxChange = (category) => {
//       const updatedCategories = {
//         ...selectedCategories,
//         [category]: !selectedCategories[category],
//       };
  
//       // Update state and check if all categories are checked
//       setSelectedCategories(updatedCategories);
  
//       const allChecked = Object.values(updatedCategories).every(checked => checked);
//       setSelectAll(allChecked);
  
//       // Call the callback to notify parent of the new filters
//       onFilterChange(updatedCategories);
//     };
  
//     // Handle "All" checkbox change
//     const handleSelectAllChange = () => {
//       const newState = !selectAll;
//       const updatedCategories = categories.reduce(
//         (acc, category) => ({ ...acc, [category]: newState }),
//         {}
//       );
  
//       // Update state
//       setSelectAll(newState);
//       setSelectedCategories(updatedCategories);
  
//       // Call the callback to notify parent of the new filters
//       onFilterChange(updatedCategories);
//     };
  
//     return (
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={selectAll}
//             onChange={handleSelectAllChange}
//           />
//           All
//         </label>
//         {categories.map(category => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedCategories[category]}
//                 onChange={() => handleCheckboxChange(category)}
//               />
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </label>
//           </div>
//         ))}
//       </div>
//     );
//  };

// const CategoryFilter = ({ categories, onFilterChange }) => {
//     // Initialize all categories as selected by default
//     const [selectedCategories, setSelectedCategories] = useState(
//       categories.reduce((acc, category) => ({ ...acc, [category]: true }), {})
//     );
  
//     // Handle checkbox change for individual categories
//     const handleCheckboxChange = (category) => {
//       const updatedCategories = {
//         ...selectedCategories,
//         [category]: !selectedCategories[category],
//       };
  
//       setSelectedCategories(updatedCategories);
  
//       // Determine whether to filter or show all based on selection state
//       const selectedCount = Object.values(updatedCategories).filter(Boolean).length;
//       const shouldShowAll = selectedCount === 0 || selectedCount === categories.length;
  
//       // If all selected or none selected, show all; otherwise, filter
//       onFilterChange(shouldShowAll ? {} : updatedCategories);
//     };
  
//     return (
//       <div>
//         {categories.map(category => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedCategories[category]}
//                 onChange={() => handleCheckboxChange(category)}
//               />
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </label>
//           </div>
//         ))}
//       </div>
//     );
//   };


const CategoryFilter = ({ categories, onFilterChange }) => {
    // Initialize all categories as selected by default
    const [selectedCategories, setSelectedCategories] = useState(
      categories.reduce((acc, category) => ({ ...acc, [category]: true }), {})
    );
  
    // Handle checkbox change for individual categories
    const handleCheckboxChange = (category) => {
      const updatedCategories = {
        ...selectedCategories,
        [category]: !selectedCategories[category],
      };
  
      setSelectedCategories(updatedCategories);
  
      // Determine whether to filter or show all based on selection state
      const selectedCount = Object.values(updatedCategories).filter(Boolean).length;
      const shouldShowAll = selectedCount === 0 || selectedCount === categories.length;
  
      // If all selected or none selected, show all; otherwise, filter
      onFilterChange(shouldShowAll ? {} : updatedCategories);
    };
  
    return (
      <div>
        {categories.map(category => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories[category]}
                onChange={() => handleCheckboxChange(category)}
              />
               {/* {category.charAt(0).toUpperCase() + category.slice(1)}  */}
               {category}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  

export default CategoryFilter;

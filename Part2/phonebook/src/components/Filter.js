import React from "react";

const Filter = ({ newNameFilter, handleFilterChange }) => {
  return (
    <div>
    filter shown with <input value={newNameFilter} onChange={handleFilterChange} />
    
</div>
  );
};

export default Filter;
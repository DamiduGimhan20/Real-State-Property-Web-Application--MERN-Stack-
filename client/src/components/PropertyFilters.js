import React from 'react';

const PropertyFilters = ({ 
  minPrice, 
  setMinPrice, 
  maxPrice, 
  setMaxPrice, 
  selectedType, 
  setSelectedType, 
  handleSearch 
}) => {
  return (
    <div className="filters">
      <div className='min'>
        <label>
          Min Price:  
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            name="text" 
            className="input" 
            placeholder="Type here..."
          />
        </label>
      </div>
      <div className='min'>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            name="text" 
            className="input" 
            placeholder="Type here..."
          />
        </label>
      </div>
      <label>
        Property Type:
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className='selected-type'
        >
          <option className='option' value="all">All</option>
          <option className='option' value="Apartment">Apartment</option>
          <option className='option' value="House">House</option>
          <option className='option' value="Commercial">Commercial</option>
          <option className='option' value="Vehical">Vehical</option>
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PropertyFilters;
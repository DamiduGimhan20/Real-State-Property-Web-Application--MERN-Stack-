// PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPropertyCard from './UserPropertyCard';
import Navbar from './Navbar';
import './css/PropertyList.css';


const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/properties');
      setProperties(response.data);
      setFilteredProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleSearch = () => {
    let filtered = properties;

    if (minPrice !== '') {
      filtered = filtered.filter(property => property.price >= Number(minPrice));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter(property => property.price <= Number(maxPrice));
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className='container'>
      <Navbar />
    <div className="property-list-container">
      <h2 className='heading'>Real State Property </h2>
      <div className="filters">
      <div className='min'>
        <label>
          Min Price:  
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            name="text" class="input" placeholder="Type here..."
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
            name="text" class="input" placeholder="Type here..."
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
          </select>
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <p className='latest-ad'>Latest Ads</p>
      <div className="property-list">
        {filteredProperties.map((property, index) => (
          <UserPropertyCard 
            key={property._id} 
            property={property} 
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default PropertyList;
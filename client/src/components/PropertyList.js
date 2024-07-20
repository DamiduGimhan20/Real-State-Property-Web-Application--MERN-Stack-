// PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPropertyCard from './UserPropertyCard';
import Navbar from './Navbar';
import PropertyFilters from './PropertyFilters';
import './css/PropertyList.css';
import Footer from './Footer';

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
        <h2 className='heading'>Real Estate Property</h2>
        <PropertyFilters
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          handleSearch={handleSearch}
        />
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
      <Footer/>
    </div>
  );
};

export default PropertyList;
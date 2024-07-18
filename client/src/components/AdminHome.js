// AdminHome.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPropertyCard from './AdminPropertyCard';
import './css/AdminHome.css';

const AdminHome = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`http://localhost:5000/api/properties/${id}`);
        fetchProperties(); 
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  return (
    <div className="admin-home">
      <h2>All Properties</h2>
      <div className="admin-property-list">
        {properties.map((property, index) => (
          <AdminPropertyCard
            key={property._id}
            property={property}
            onDelete={handleDelete}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
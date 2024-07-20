import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPropertyCard from './AdminPropertyCard';
import './css/AdminHome.css';

const AdminHome = () => {
  const [properties, setProperties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);

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

  const openDeleteModal = (property) => {
    setPropertyToDelete(property);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setPropertyToDelete(null);
  };

  const handleDelete = async () => {
    if (propertyToDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/properties/${propertyToDelete._id}`);
        fetchProperties();
        closeDeleteModal();
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
            onDelete={() => openDeleteModal(property)}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this property  "{propertyToDelete?.title}"?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeDeleteModal}>Cancel</button>
              <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
// AdminPropertyCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/AdminPropertyCard.css';

const AdminPropertyCard = ({ property, onDelete, style }) => {
  return (
    <div className="admin-property-card" style={style}>
      <img src={`http://localhost:5000${property.image}`} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="property-description">{property.description.substring(0, 100)}...</p>
        <p className="property-price">Price: LKR {property.price.toLocaleString()}</p>
        <p className="property-type">Type: {property.type}</p>
      </div>
      <div className="admin-actions">
        <Link to={`/admin/edit/${property._id}`} className="edit-button">Edit</Link>
        <button onClick={() => onDelete(property._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default AdminPropertyCard;
// UserPropertyCard.js
import React from 'react';
import './css/UserPropertyCard.css';

const UserPropertyCard = ({ property }) => {
  return (
    <div className="user-property-card">
      <img src={`http://localhost:5000${property.image}`} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="property-description">{property.description.substring(0, 150)}...</p>
        <p className="property-price">Price: LKR {property.price.toLocaleString()}</p>
        <p className="property-type">Type: {property.type}</p>
        <button className="contact-button" onClick={() => {
              const Link = `tel:${property.contact}`;
              window.open(Link, "_blank");
            }}>
              Contact Seller
        </button>
      </div>
    </div>
  );
};

export default UserPropertyCard;
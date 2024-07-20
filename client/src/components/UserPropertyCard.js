// UserPropertyCard.js
import React, { useState } from 'react';
import './css/UserPropertyCard.css';

const UserPropertyCard = ({ property }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="user-property-card">
      <img src={`http://localhost:5000${property.image}`} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <div 
          className="property-description-container"
          onMouseEnter={() => setShowFullDescription(true)}
          onMouseLeave={() => setShowFullDescription(false)}
        >
          <p className="property-description">
            {showFullDescription ? property.description : `${property.description.substring(0, 150)}...`}
          </p>
          {showFullDescription && (
            <div className="full-description-popup">
              {property.description}
            </div>
          )}
        </div>
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
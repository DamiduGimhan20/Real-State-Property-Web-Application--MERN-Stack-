import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/EditProperty.css'; // Adjust the path according to your project structure

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: '',
    contact: '',
    type: '',
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
        // Handle error, e.g., show a message to the user
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/properties/${id}`, property);
      alert('Property updated successfully!');
    } catch (error) {
      console.error('Error updating property:', error);
      // Handle error, e.g., show a message to the user
    }
  };

  return (
    <div className="edit-property-form">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={property.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={property.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="contact"
          value={property.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <select name="type" value={property.type} onChange={handleChange}>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
        <button type="submit">Update Property</button>
      </form>
    </div>
  );
};

export default EditProperty;

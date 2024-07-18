import React, { useState } from 'react';
import axios from 'axios';
import'./css/AddProperty.css';

const AddProperty = () => {
  // State hooks to manage form data, image, and error handling
  const [property, setProperty] = useState({
    title: '',
    description: '',
    price: '',
    contact: '',
    type: 'Apartment', // Default property type
  });
  const [image, setImage] = useState(null); // State to hold selected image file
  const [error, setError] = useState(''); // State to handle and display form submission errors

  // Update property state based on form input changes
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear any previous errors
    const formData = new FormData(); // Create FormData object to send data as multipart/form-data

    // Append property data to FormData
    Object.keys(property).forEach((key) => formData.append(key, property[key]));

    // Append image file to FormData if selected
    if (image) {
      formData.append('image', image);
    }

    try {
      // Send POST request to server to add property
      const response = await axios.post('http://localhost:5000/api/properties', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for FormData
        },
      });

      // Log and alert success message on successful property addition
      console.log('Response:', response.data);
      alert('Property added successfully!');

      // Reset form fields and state after successful submission
      setProperty({
        title: '',
        description: '',
        price: '',
        contact: '',
        type: 'Apartment',
      });
      setImage(null);
    } catch (error) {
      // Log and set error state if there's an error adding the property
      console.error('Error adding property:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : 'Error adding property. Please try again.');
    }
  };

  // Render form for adding new property
  return (
    <div className="add-property-form">
    <h2>Add New Property</h2>
    {error && <p className="error-message">{error}</p>}
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
      <div className='addpro'>
      <label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload image</span>
   </div>
   <input type="file" onChange={handleImageChange} id='file'/>
</label>
</div>

      <button type="submit">Add Property</button>
    </form>
  </div>
  );
};

export default AddProperty;

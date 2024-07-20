// AdminPanel.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminHome from './AdminHome';
import AddProperty from './AddProperty';
import EditProperty from './EditPropertyForm';
import './css/AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <nav>
        <ul>
          <li><Link to="/admin">Admin Home</Link></li>
          <li><Link to="/admin/add">Add Property</Link></li>
          <li><Link to="/properties">Property List </Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/edit/:id" element={<EditProperty />} />
      </Routes>
    </div>
  );
};

export default AdminPanel;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import Modal from './Model';
import AddProperty from './AddProperty';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Real Estate
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/properties" className="nav-link">Ads</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <button onClick={openModal} className="post-ad-button">
          <div className="icon-container">
            <div className="icon-blur"></div>
            <svg className="plus-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          Post your Ads
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProperty />
      </Modal>
    </nav>
  );
};

export default Navbar;
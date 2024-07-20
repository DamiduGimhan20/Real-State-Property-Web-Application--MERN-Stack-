import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, Home, Building, DollarSign } from 'lucide-react';
import './css/HomePage.css';
import Footer from './Footer';

const HomePage = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/properties');
      // Assuming we want to feature the 3 most expensive properties
      const sortedProperties = response.data.sort((a, b) => b.price - a.price);
      setFeaturedProperties(sortedProperties.slice(0, 3));
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>Find Your Dream Property</h1>
          <p>Discover a wide range of properties that suit your lifestyle and budget</p>
          <Link to="/properties" className="cta-button">Browse Properties</Link>
        </div>
      </header>

      {/* Featured Properties */}
      <section className="featured-properties">
        <div className="container">
          <h2>Featured Properties</h2>
          <div className="property-grid">
            {featuredProperties.map((property) => (
              <div key={property._id} className="property-card">
                <img src={`http://localhost:5000${property.image}`} alt={property.title} />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="location">{property.type}</p>
                  <p className="price">${property.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/properties" className="view-all-link">
              View All Properties <ArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features">
            <div className="feature">
              <Home className="icon" />
              <h3>Wide Range of Properties</h3>
              <p>From cozy apartments to luxurious houses, we have something for everyone.</p>
            </div>
            <div className="feature">
              <Building className="icon" />
              <h3>Expert Guidance</h3>
              <p>Our experienced agents will help you find the perfect property.</p>
            </div>
            <div className="feature">
              <DollarSign className="icon" />
              <h3>Competitive Prices</h3>
              <p>We offer the best deals on the market, ensuring value for your money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Find Your Dream Property?</h2>
          <p>Start your search today and let us help you find the perfect home.</p>
          <Link to="/properties" className="cta-button">Get Started</Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
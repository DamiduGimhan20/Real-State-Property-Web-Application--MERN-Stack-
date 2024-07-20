import React from 'react';
import Dev from './img/team-members/dev.png';
import './css/AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className="about-us">
    <Navbar/>
      <header className="about-header">
        <div className="container">
          <h1>About Our Real Estate Company</h1>
          <p>Building dreams, one home at a time</p>
        </div>
      </header>

      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>Founded in 2010, our real estate company has been dedicated to helping people find their perfect homes. We started as a small team of passionate individuals and have grown into a trusted name in the real estate industry.</p>
          <p>With over a decade of experience, we've helped thousands of families and individuals navigate the complex world of real estate, always putting our clients' needs first.</p>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We believe in honest, transparent dealings in all our transactions.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in our service and properties.</p>
            </div>
            <div className="value-item">
              <h3>Client-Centric</h3>
              <p>Our clients' needs and satisfaction are at the heart of everything we do.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We embrace new technologies and methods to improve our services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={Dev} alt="Dev" />
              <h3>Damidu Gimhan</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={Dev} alt="Dev" />
              <h3>Maleesha Hansamal</h3>
              <p>Head of Sales</p>
            </div>
            <div className="team-member">
              <img src={Dev} alt="Dev" />
              <h3>Kavinda Liyanarachchi</h3>
              <p>Lead Property Consultant</p>
            </div>
            <div className="team-member">
              <img src={Dev} alt="Dev" />
              <h3>Dimuthu Ruwantha</h3>
              <p>Customer Relations Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Whether you're looking to buy, sell, or just have questions about real estate, our team is here to help.</p>
          <a href="/contact" className="contact-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
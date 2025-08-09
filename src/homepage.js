import React from "react";
import "./homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to CityCare Hospital</h1>
        <p>Your Health, Our Priority</p>
      </header>

      <nav className="nav-bar">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="services" className="section services">
        <h2>Our Services</h2>
        <ul>
          <li>Outpatient & Inpatient Department</li>
          <li>Emergency Services</li>
          <li>Pharmacy</li>
          <li>Pathology & Diagnostics</li>
          <li>Specialist Consultations</li>
        </ul>
      </section>

      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          CityCare Hospital provides world-class healthcare with compassion and excellence, serving the community for 25 years.
        </p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Email: info@citycare.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Health Street, Wellness City</p>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CityCare Hospital. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

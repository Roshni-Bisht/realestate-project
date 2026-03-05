import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [sqft, setSqft] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  
  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (type) params.append("type", type);
    if (location) params.append("location", location.trim());
    if (sqft) params.append("sqft", sqft);
    if (price) params.append("price", price);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="hero-section d-flex align-items-center full-height-hero">
      <div className="hero-overlay"></div>
      <div className="container text-center text-white hero-content">
        <h1>Looking to Buy or Rent Properties?</h1>
        <p>Find your dream home with us!</p>

        <form
          className="row g-2 justify-content-center mt-4"
          onSubmit={handleSearch}
        >
          <div className="col-md-2">
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Farmhouse</option>
              <option>Bungalow</option>
            </select>
          </div>

          <div className="col-md-3">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              placeholder="Location"
            />
          </div>

          <div className="col-md-1 d-grid">
            <button type="submit" className="btn btn-primary btn-search-blue">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;

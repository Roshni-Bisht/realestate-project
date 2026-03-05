// frontend/src/components/PropertyCard.js
import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={`http://127.0.0.1:8000${property.image}`}
          className="card-img-top"
          alt={property.title}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text mb-1"><strong>Type:</strong> {property.property_type}</p>
          <p className="card-text mb-1"><strong>Location:</strong> {property.location}</p>
          <p className="card-text mb-1"><strong>Area:</strong> {property.area_sqft} sqft</p>
          <p className="card-text text-success"><strong>₹ {property.price}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

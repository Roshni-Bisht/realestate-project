import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        {property.image && (
          <img
            src={`http://127.0.0.1:8000${property.image}`}
            alt={property.title}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text text-muted mb-1">
            <strong>Type:</strong> {property.property_type}
          </p>
          <p className="card-text text-muted mb-1">
            <strong>Location:</strong> {property.location}
          </p>
          <p className="card-text text-success mb-1">
            <strong>Price:</strong> ₹{parseFloat(property.price).toLocaleString()}
          </p>
          <p className="card-text small">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

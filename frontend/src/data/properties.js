import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const PropertiesPage = () => {
  const { search } = useLocation(); // captures ?location=Delhi etc.
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Corrected API endpoint
        const response = await axios.get(`http://127.0.0.1:8000/api/search/${search}`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchData();
  }, [search]);

  // ✅ Google Maps setup
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // replace with your real key
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* 🗺️ Left side: Map */}
        <div className="col-md-7">
          <GoogleMap
            zoom={10}
            center={{ lat: 28.6139, lng: 77.2090 }} // Delhi center
            mapContainerStyle={{ width: "100%", height: "80vh", borderRadius: "12px" }}
          >
            {properties.map((property) => (
              <Marker
                key={property.id}
                position={{
                  lat: property.latitude || 28.6139,
                  lng: property.longitude || 77.2090,
                }}
              />
            ))}
          </GoogleMap>
        </div>

        {/* 🏡 Right side: Property Cards */}
        <div className="col-md-5">
          <h4 className="mb-3">
            {properties.length} property{properties.length !== 1 ? "ies" : "y"} found
          </h4>

          {properties.length === 0 ? (
            <p>No properties found for selected filters.</p>
          ) : (
            properties.map((p) => (
              <div key={p.id} className="card mb-3 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="text-muted mb-1">{p.location}</p>
                  <p className="mb-0">
                    <strong>{p.property_type}</strong> • {p.area_sqft} sq.ft
                  </p>
                  <p className="text-success fw-bold mt-1">₹{p.price.toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;

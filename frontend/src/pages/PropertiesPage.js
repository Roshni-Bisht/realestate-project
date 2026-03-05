import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const PropertiesPage = () => {
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ FIXED: Correct backend API URL for filtering
        const response = await axios.get(`http://127.0.0.1:8000/api/search/${search}`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, [search]);

  // ✅ Load Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* 🗺️ Map on left */}
        <div className="col-md-7">
          <GoogleMap
            zoom={10}
            center={{ lat: 28.6139, lng: 77.209 }}
            mapContainerStyle={{ width: "100%", height: "80vh" }}
          >
            {Array.isArray(properties) &&
              properties.map((property) => (
                property.latitude && property.longitude && (
                  <Marker
                    key={property.id}
                    position={{
                      lat: property.latitude,
                      lng: property.longitude,
                    }}
                  />
                )
              ))}
          </GoogleMap>
        </div>

        {/* 🏠 Property cards on right */}
        <div className="col-md-5">
          <h4>{properties.length} properties found</h4>
          {Array.isArray(properties) && properties.map((p) => (
            <div key={p.id} className="card mb-3 shadow-sm">
              <img
                src={`http://127.0.0.1:8000${p.image}`}
                className="card-img-top"
                alt={p.title}
              />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>{p.location}</p>
                <p>
                  {p.property_type} • {p.area_sqft} sq.ft • ₹{p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;

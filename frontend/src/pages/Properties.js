import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Properties = () => {
  const query = useQuery();
  const [properties, setProperties] = useState([]);

  // Get filters from URL
  const qType = query.get("type");
  const qLocation = query.get("location");
  const qSqft = query.get("sqft");
  const qPrice = query.get("price");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const params = new URLSearchParams();
        if (qType) params.append("type", qType);
        if (qLocation) params.append("location", qLocation);
        if (qSqft) params.append("sqft", qSqft);
        if (qPrice) params.append("price", qPrice);

        // ✅ Correct Django URL
        const response = await axios.get(`http://127.0.0.1:8000/api/?${params.toString()}`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [qType, qLocation, qSqft, qPrice]);

  return (
    <section className="py-5">
      <div className="container">
        <h2>Properties</h2>
        <p className="text-muted">Browse available listings</p>
        <div className="row mt-4">
          {properties.length > 0 ? (
            properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))
          ) : (
            <div className="col-12">
              <p>No properties found for selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;

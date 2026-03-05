import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ResidentialProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Skyline Villa",
      type: "Villa",
      sqft: "4500 sq.ft",
      price: "₹7.5 Cr",
      location: "South Delhi",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Palm Grove Mansion",
      type: "Villa",
      sqft: "4800 sq.ft",
      price: "₹8.2 Cr",
      location: "Defence Colony",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    
    {
      id: 3,
      name: "Heritage Bungalow",
      type: "Bungalow",
      sqft: "6000 sq.ft",
      price: "₹12.5 Cr",
      location: "Vasant Vihar",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Rosewood Apartments",
      type: "Apartment",
      sqft: "2200 sq.ft",
      price: "₹3.2 Cr",
      location: "Greater Kailash",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Elegance Tower",
      type: "Apartment",
      sqft: "2000 sq.ft",
      price: "₹2.8 Cr",
      location: "Saket",
      image:
        "https://images.unsplash.com/photo-1600585154207-1e4be1b4d4e9?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Lotus Residency",
      type: "Apartment",
      sqft: "2500 sq.ft",
      price: "₹3.9 Cr",
      location: "Hauz Khas",
      image:
        "https://images.unsplash.com/photo-1628744902203-2c5e0f392f91?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      name: "White Orchid Villa",
      type: "Villa",
      sqft: "5200 sq.ft",
      price: "₹9.1 Cr",
      location: "Chattarpur",
      image:
        "https://images.unsplash.com/photo-1616627452551-d9b8b62c9a7d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      name: "Elite Square",
      type: "Apartment",
      sqft: "1800 sq.ft",
      price: "₹2.6 Cr",
      location: "Malviya Nagar",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 9,
      name: "Royal Greens Estate",
      type: "Bungalow",
      sqft: "7000 sq.ft",
      price: "₹15 Cr",
      location: "Vasant Kunj",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <Container>
        {/* ===== Header Section ===== */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontWeight: "bold",
              color: "#222",
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            Residential Properties
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "1rem",
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "1.7",
            }}
          >
            The increasing demand for luxury homes is reshaping the real estate
            landscape in South Delhi. Working professionals and business owners,
            especially millennials, are investing in premium homes to elevate
            their lifestyle. However, finding the right luxury property can be
            overwhelming. At{" "}
            <span style={{ color: "#00c495", fontWeight: "bold" }}>
              Residly
            </span>
            , we simplify this by curating exclusive listings suited to your
            needs and budget.
          </p>
        </div>

        {/* ===== Property Cards Section ===== */}
        <h4
          style={{
            fontWeight: "bold",
            color: "#222",
            marginBottom: "25px",
            marginLeft: "5px",
          }}
        >
          Latest Listings
        </h4>

        <Row>
          {properties.map((property, index) => (
            <Col key={property.id} md={4} style={{ marginBottom: "30px" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Card
                  style={{
                    border: "none",
                    borderRadius: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-6px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Card.Img
                    variant="top"
                    src={property.image}
                    alt={property.name}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body style={{ padding: "20px" }}>
                    <Card.Title
                      style={{ fontWeight: "bold", fontSize: "1.25rem" }}
                    >
                      {property.name}
                    </Card.Title>

                    <Card.Text style={{ color: "#555", marginBottom: "5px" }}>
                      <strong>Type:</strong> {property.type}
                    </Card.Text>

                    <Card.Text style={{ color: "#555", marginBottom: "5px" }}>
                      <strong>Area:</strong> {property.sqft}
                    </Card.Text>

                    <Card.Text style={{ color: "#555", marginBottom: "5px" }}>
                      <strong>Location:</strong> {property.location}
                    </Card.Text>

                    <Card.Text style={{ color: "#000", fontWeight: "600" }}>
                      <strong>Price:</strong> {property.price}
                    </Card.Text>

                    <Button
                      variant="success"
                      style={{
                        marginTop: "10px",
                        width: "100%",
                        backgroundColor: "#00c495",
                        border: "none",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "10px 0",
                      }}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ResidentialProperties;

import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CommercialProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Downtown Sarojini Nagar",
      type: "Commercial Complex",
      sqft: "Price Upon Request",
      price: "For Rent / For Sale",
      location: "South Delhi",
      description:
        "Welcome to Downtown Sarojini Nagar, a landmark destination designed to redefine the way you shop, dine, work, and socialize in the heart of South Delhi.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "World Trade Center Nauroji Nagar",
      type: "Office / Commercial",
      sqft: "2,500 - 50,000 sqft",
      price: "For Rent / For Sale",
      location: "South Delhi",
      description:
        "World Trade Center promotes trade & investment with premium office spaces for national & international companies.",
      image:
        "https://images.unsplash.com/photo-1573164574391-1c3f6c5dfc7d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Commercial Property For Sale In Okhla 2",
      type: "Office Building",
      sqft: "22,000 sqft",
      price: "Price Upon Request",
      location: "Okhla",
      description:
        "100% commercially approved building, pristine condition, ready for investment or occupation.",
      image:
        "https://images.unsplash.com/photo-1612831455546-8c77c5a0f8c0?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Prime Office Space In Saket Business District",
      type: "Office",
      sqft: "15,000 sqft",
      price: "From ₹200,000 Per Month",
      location: "Saket",
      description:
        "Meticulously curated office spaces in the vibrant Saket District Centre, ideal for expanding businesses.",
      image:
        "https://images.unsplash.com/photo-1600585154207-1e4be1b4d4e9?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Eldeco Centre Modern Office & Retail Hub",
      type: "Office & Retail",
      sqft: "Varies",
      price: "For Rent",
      location: "Saket",
      description:
        "Ultra-modern office & retail building, located at prime connectivity spots near DMRC.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Corporate Hub Cyber City",
      type: "Office / Co-working",
      sqft: "5,000 - 20,000 sqft",
      price: "For Rent",
      location: "Gurugram",
      description:
        "Premium co-working & office spaces suitable for international and domestic companies.",
      image:
        "https://images.unsplash.com/photo-1628744902203-2c5e0f392f91?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      name: "Elite Retail Plaza",
      type: "Retail",
      sqft: "3,000 - 8,000 sqft",
      price: "For Sale / Rent",
      location: "Connaught Place",
      description:
        "Strategically located retail spaces for maximum footfall and visibility.",
      image:
        "https://images.unsplash.com/photo-1616627452551-d9b8b62c9a7d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      name: "Warehouse & Storage Facility",
      type: "Warehouse",
      sqft: "10,000 - 50,000 sqft",
      price: "For Rent / Sale",
      location: "Faridabad",
      description:
        "High-capacity warehouse & storage facility with excellent logistics connectivity.",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 9,
      name: "Investment Property - Banks & Manufacturing",
      type: "Investment / Commercial",
      sqft: "Varies",
      price: "Price Upon Request",
      location: "South Delhi",
      description:
        "Premium properties for banks, manufacturing, workshops, and storage facilities. Perfect for investors.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
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
            Commercial Properties
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "1rem",
              maxWidth: "900px",
              margin: "auto",
              lineHeight: "1.7",
            }}
          >
            Are you looking for premium commercial properties in South Delhi? Look no further,
            as <strong>Royale Realtors</strong> has got you covered. From office spaces, retail
            outlets, warehouses, showrooms, to co-working hubs, we provide expert analysis and
            curated listings to suit your needs. We also assist in selling and leasing commercial
            properties to find the ideal buyer or tenant.
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
          Featured Commercial Properties
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

                    <Card.Text style={{ color: "#555", marginBottom: "10px" }}>
                      {property.description}
                    </Card.Text>

                    <Card.Text style={{ color: "#000", fontWeight: "600" }}>
                      <strong>{property.price}</strong>
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
                      View Property
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

export default CommercialProperties;

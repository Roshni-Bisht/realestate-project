import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const RentLeaseServices = () => {
  const highlights = [
    "Dedicated property manager for each property",
    "Property inspections and apartment upkeep",
    "Tenant background check and rental advisory",
    "Documentation and execution",
    "Seamless transition with no hassles",
    "Free Pick up & Drop from your office/hotel/residence",
    "Personalized assistance & approach",
    "One Point Contact for all your real estate solutions",
    "Listings of the properties before site visits on email",
    "Transparent Negotiations to guarantee you the best deal",
    "Hire of Furniture, Air-Conditioners, Power Backup, White Goods & their Maintenance",
    "Full Lease or Legal Paperwork, doorstep service",
  ];

  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "60px 0", minHeight: "100vh" }}>
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontWeight: "bold", color: "#222", fontSize: "2rem", marginBottom: "15px" }}>
            Rent / Lease Properties
          </h2>
          <p style={{ color: "#555", fontSize: "1rem", maxWidth: "900px", margin: "auto", lineHeight: "1.7" }}>
            Royale Realtors simplifies the property management process. Whether you’re looking for a property for rent, tenants for your property, or property management services, we offer end-to-end solutions to help you seamlessly manage your residential and commercial properties.
          </p>
        </div>

        {/* Find Rental Properties Section */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontWeight: "bold", color: "#222", marginBottom: "20px" }}>Find Rental Properties</h3>
          <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.7" }}>
            Whether you are a Foreigner working with an MNC, a Diplomat with Embassy, Expatriate with a Foreign Mission, or a reputed HNI client, finding the perfect rental property in South Delhi is crucial. We help you evaluate location, amenities, schools, hospitals, markets, and more to avoid mistakes.
          </p>
          <ul style={{ color: "#555", fontSize: "1rem", lineHeight: "1.7", paddingLeft: "20px" }}>
            <li>Understand Your Needs: We understand your location requirements and the amenities you need.</li>
            <li>Find Properties: We suggest the best properties as per your individual requirements.</li>
            <li>Connect You with the Landlord: Once you shortlist a property, we connect you with the landlord.</li>
            <li>Handle Documentation: We handle the rent agreement and other paperwork for a seamless move-in.</li>
          </ul>
        </div>

        {/* Property Leasing Section */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontWeight: "bold", color: "#222", marginBottom: "20px" }}>Property Leasing</h3>
          <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.7" }}>
            We help property owners find the right tenant for luxury residential or commercial properties. Our full-service management includes tenant sourcing, background checks, maintenance, and documentation. Enjoy peace of mind with complete visibility into the rental process.
          </p>

          <Row>
            {highlights.map((item, index) => (
              <Col md={4} key={index} style={{ marginBottom: "20px" }}>
                <Card
                  style={{
                    border: "none",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: "20px",
                    height: "100%",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <Card.Text style={{ color: "#222", fontWeight: "600" }}>• {item}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h4 style={{ fontWeight: "bold", color: "#222", marginBottom: "15px" }}>Your Dream Luxury Home Is One Call Away</h4>
          <Button
            style={{
              backgroundColor: "#00c495",
              border: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "12px 25px",
              fontSize: "1rem",
            }}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RentLeaseServices;

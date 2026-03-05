// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactBanner from "../assets/contact.jpg"; // <-- imported image

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!"); // replace with API call if needed
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const LIGHT_BLUE = "#3399ff";

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: `url(${ContactBanner}) center/cover no-repeat`,
          padding: "120px 0",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)", // dark overlay for readability
          }}
        ></div>
        <Container style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold display-4">Contact Us</h1>
          <p className="lead">We’re here to help you find your dream home.</p>
        </Container>
      </section>

      {/* Contact Info Blocks */}
      <section style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <FaMapMarkerAlt size={30} color={LIGHT_BLUE} className="mb-3" />
                <h5>Address</h5>
                <p>
                  Suncity Success Tower, Unit No 226 & 227, 2nd Floor, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122018
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <FaPhoneAlt size={30} color={LIGHT_BLUE} className="mb-3" />
                <h5>Phone</h5>
                <p>+91 9899 055 893</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <FaEnvelope size={30} color={LIGHT_BLUE} className="mb-3" />
                <h5>Email</h5>
                <p>info@residly.com</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form + Map */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col md={6}>
              <h2 className="mb-4">Send Us a Message</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message..."
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  style={{ backgroundColor: LIGHT_BLUE, borderColor: LIGHT_BLUE }}
                  className="w-100"
                >
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Google Map */}
            <Col md={6}>
              <h2 className="mb-4">Our Location</h2>
              <div style={{ borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                  title="Residly Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456!2d77.071372!3d28.460786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b123456789%3A0x123456789abcdef!2sSuncity%20Success%20Tower!5e0!3m2!1sen!2sin!4v1698356789000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;

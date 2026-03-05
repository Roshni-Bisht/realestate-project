import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      navigate("/");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  // The URL for the image retrieved from the search - CORRECTED with quotes
  const LOGIN_IMAGE_URL = "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2022/04/chennai-hurun-list.jpg?1649657941";
  
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Row className="w-100 justify-content-center">
        {/* Adjusted Col size to accommodate the two-panel layout */}
        <Col md={10} lg={8} xl={7}> 
          {/* Card acts as the main container for both panels, providing shadow and rounding */}
          <Card 
            className="shadow-lg border-0 rounded-4 d-flex flex-row overflow-hidden" 
            style={{ 
              maxWidth: '850px', 
              margin: 'auto',
              // Setting min-height ensures the image panel has enough space
              minHeight: '400px', 
            }}
          >
            
            {/* --- Image Section (Left Side) --- */}
            {/* Uses d-none d-md-block to hide the image on small screens */}
            <Col 
              md={6} 
              className="d-none d-md-block" 
              style={{
                padding: 0, 
                // Setting the image as a background with the corrected URL
                backgroundImage: `url(${LOGIN_IMAGE_URL})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Ensures the image fills the height of the card
                minHeight: '100%', 
                borderRadius: '0.25rem 0 0 0.25rem', // Apply rounded corner only to the left side
              }}
            >
              {/* This column is intentionally left empty */}
            </Col>

            {/* --- Login Form Section (Right Side) --- */}
            <Col md={6} sm={12}>
              <Card.Body className="p-5">
                {/* Updated heading to match the screenshot better (simple "Login") */}
                <h3 className="text-start fw-bold mb-4">
                  Login
                </h3>

                {error && (
                  <Alert variant="danger" className="text-center py-2">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Control
                      type="text"
                      placeholder="Username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      style={{ padding: "12px 15px", borderRadius: "8px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{ padding: "12px 15px", borderRadius: "8px" }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 fw-bold mt-2"
                    style={{
                      backgroundColor: "#00c495",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    Login
                  </Button>
                </Form>

                <div className="text-center mt-3">
                  <span className="text-muted">Don’t have an account? </span>
                  <Link to="/register" className="fw-semibold" style={{ color: "#00c495" }}>
                    Register
                  </Link>
                </div>
              </Card.Body>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
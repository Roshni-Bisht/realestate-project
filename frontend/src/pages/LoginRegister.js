import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://127.0.0.1:8000/api/properties/login/"
      : "http://127.0.0.1:8000/api/properties/register/";

    try {
      const response = await axios.post(url, formData);
      setMessage({ text: response.data.message, type: "success" });
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage({
        text: error.response?.data?.error || "Something went wrong",
        type: "danger",
      });
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 fw-bold">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h3>

              {message && (
                <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
                  {message.text}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Email (only for Register) */}
                {!isLogin && (
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                )}

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    type="submit"
                    variant="success"
                    style={{ backgroundColor: "#00c495", border: "none" }}
                  >
                    {isLogin ? "Login" : "Register"}
                  </Button>
                </div>
              </Form>

              <p className="text-center mt-3 mb-0">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <span
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setMessage(null);
                  }}
                  style={{ color: "#00c495", cursor: "pointer", fontWeight: "600" }}
                >
                  {isLogin ? "Register" : "Login"}
                </span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;

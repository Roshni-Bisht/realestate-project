import React, { useEffect, useState, useContext } from "react";
import { Nav, Navbar as BSNavbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext"; 

const Navbar = () => {
  const ACCENT_COLOR = "#00c495";
  const { username, logoutUser } = useContext(AuthContext); 
  const [loggedInUser, setLoggedInUser] = useState(username || null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(username);
  }, [username]);

  const handleLogout = () => {
    logoutUser(); 
    navigate("/login"); 
  };

  return (
    <BSNavbar
      variant="light"
      expand="lg"
      className="shadow-sm bg-white custom-navbar-light"
      sticky="top"
    >
      <Container fluid className="px-5">
        {/* ✅ House SVG + Brand Name */}
        <BSNavbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-3 text-dark d-flex align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00c495"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="me-2"
          >
            <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
          </svg>
          Residly
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto text-uppercase fw-bold d-flex align-items-center">
           
           
            <NavDropdown
              title={<span className="nav-link-color">Properties</span>}
              id="properties-dropdown"
              className="nav-hover"
            >
              <NavDropdown.Item as={NavLink} to="/properties/residential">
                Residential
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/properties/commercial">
                Commercial
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="nav-link-color">Services</span>}
              id="services-dropdown"
              className="nav-hover"
            >
              <NavDropdown.Item as={NavLink} to="/services/rent-lease">
                Rent / Lease
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/buy-sell">
                Buy / Sell
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/about" className="nav-link-color">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link-color">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-color">
              Contact
            </Nav.Link>

            {/* ✅ Show username or login icon */}
            {loggedInUser ? (
              <NavDropdown
                align="end"
                title={
                  <span className="d-flex align-items-center">
                    <FaUser className="fs-5 text-dark ms-3 me-2" /> {loggedInUser}
                  </span>
                }
                id="user-menu"
              >
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
                className="d-flex align-items-center"
              >
                <FaUser className="fs-5 text-dark ms-3 me-4" />
              </Nav.Link>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

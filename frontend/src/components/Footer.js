import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log("Footer link clicked. Add routing/external URL here.");
    };

    return (
        <footer style={{ backgroundColor: '#000' }} className="text-white pt-5">
            <Container fluid className="px-5">
                <Row className="mb-4">
                    
                    <Col lg={4} md={12} className="mb-5 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                             <div 
                                style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-blue)' }} 
                                className="me-2 rounded" 
                             />
                            <div className="fw-bold fs-5 text-uppercase">Residly</div>
                        </div>
                        
                        <h5 className="text-white fw-bold mb-3">Residly </h5>
                        <p className="text-light small">
                            One-Stop Destination for Buying and Selling Luxury Homes and Top-Notch Commercial Spaces
                        </p>
                        
                        <div className="d-flex gap-3 fs-5 mt-4">
                            <a href="#" onClick={handleLinkClick} className="text-decoration-none text-accent-blue"><FaFacebookF /></a>
                            <a href="#" onClick={handleLinkClick} className="text-decoration-none text-accent-blue"><FaInstagram /></a>
                            <a href="#" onClick={handleLinkClick} className="text-decoration-none text-accent-blue"><FaLinkedinIn /></a>
                            <a href="#" onClick={handleLinkClick} className="text-decoration-none text-accent-blue"><FaTwitter /></a>
                            <a href="#" onClick={handleLinkClick} className="text-decoration-none text-accent-blue"><FaYoutube /></a>
                        </div>
                    </Col>
                    
                    <Col lg={2} md={4} sm={4} xs={6} className="mb-4">
                        <h6 className="text-white fw-bold text-uppercase mb-3">Call</h6>
                        <ul className="list-unstyled small text-light">
                            <li><a href="tel:+919818312077" className="text-light text-decoration-none">+91 9818312077</a></li>
                        </ul>
                    </Col>
                    
                    <Col lg={3} md={4} sm={4} xs={6} className="mb-4">
                        <h6 className="text-white fw-bold text-uppercase mb-3">Write</h6>
                        <ul className="list-unstyled small text-light">
                            <li><a href="mailto:info@royalerealtorsindia.com" className="text-light text-decoration-none">info@residly.com</a></li>
                            <li><a href="mailto:Lalit@royalerealtorsindia.com" className="text-light text-decoration-none">Lalit@royaleresidly.com</a></li>
                        </ul>
                    </Col>
                    
                    <Col lg={3} md={4} sm={4} xs={12} className="mb-4">
                        <h6 className="text-white fw-bold text-uppercase mb-3">Visit</h6>
                        <p className="small text-light">
                            19 DDA Market, Shanti Niketan, Delhi 110021
                        </p>
                    </Col>
                    
                </Row>
            </Container>
            
            <div 
                className="text-center small py-3 text-light" 
                style={{ borderTop: `1px solid var(--primary-blue)`, backgroundColor: '#000' }} 
            >
                © Residly 2025. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
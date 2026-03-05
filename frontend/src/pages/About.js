import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import './About.css';

// Placeholder image paths - ensure you have these files in src/assets/
import AboutUsHeroImg from '../assets/about-us-hero.jpg'; 
import AboutUsBuildingImg from '../assets/about-us-building.jpg'; 
import FounderProfileImg from '../assets/founder-profile.jpg'; 
// Use a generic image for the team section 
import TeamBuildingImg from '../assets/team-building.jpg'; 

const About = () => {
    // The Light Blue accent color for consistency
    const LIGHT_BLUE_ACCENT = "#3ABFF8";

    return (
        <div className="about-page-container">
            {/* 1. HERO BANNER */}
            <header className="about-hero-banner" style={{ backgroundImage: `url(${AboutUsHeroImg})` }}>
                <div className="about-hero-overlay"></div>
                <h1 className="about-hero-title">About us</h1>
            </header>

            {/* 2. WHO WE ARE SECTION (Brown Background - Adjusted to a softer complementary color) */}
            <section className="who-we-are-section py-5">
                <Container>
                    <h2 className="text-center mb-4 text-white">Who we are</h2>
                    <p className="text-center text-white-50 mx-auto" style={{ maxWidth: '800px' }}>
                        Welcome to Residly, where we redefine real estate. We are an innovative and forward-thinking agency 
                        dedicated to providing seamless property solutions for buying, selling, and leasing. Our foundation 
                        is built on trust, transparency, and a deep understanding of the market, ensuring every client 
                        experience is successful and stress-free.
                    </p>
                </Container>
            </section>

            {/* 3. ABOUT US CONTENT SECTION (Image 2 Inspired) */}
            <section className="about-content-section py-5">
                <Container className="my-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <img 
                                src={AboutUsBuildingImg} 
                                alt="Modern Building" 
                                className="img-fluid about-image shadow-lg"
                            />
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <h2 className="main-heading">
                                Your trusted partner in finding your next <span style={{ color: LIGHT_BLUE_ACCENT }}>dream home</span>.
                            </h2>
                            <p className="lead text-muted">
                                We believe that finding a home is more than just a transaction—it's about finding a place 
                                where memories are made. Our team of seasoned professionals uses cutting-edge technology 
                                and personalized service to match you with the perfect property.
                            </p>
                            <ul className="list-unstyled mt-4 about-features">
                                <li className="mb-2">
                                    <span className="about-icon" style={{ backgroundColor: LIGHT_BLUE_ACCENT }}>✓</span> 
                                    Exclusive access to off-market listings.
                                </li>
                                <li className="mb-2">
                                    <span className="about-icon" style={{ backgroundColor: LIGHT_BLUE_ACCENT }}>✓</span> 
                                    Certified, highly-rated property valuation experts.
                                </li>
                                <li className="mb-2">
                                    <span className="about-icon" style={{ backgroundColor: LIGHT_BLUE_ACCENT }}>✓</span> 
                                    24/7 client support and dedicated legal assistance.
                                </li>
                            </ul>
                            <a href="#" className="btn btn-lg fw-bold mt-4 about-cta-btn" style={{ backgroundColor: LIGHT_BLUE_ACCENT, borderColor: LIGHT_BLUE_ACCENT }}>
                                Explore Our Portfolio
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 4. FOUNDER'S MESSAGE SECTION (Image 3 Inspired) */}
            <section className="founders-message-section py-5 bg-light">
                <Container className="my-5">
                    <Row className="align-items-center flex-lg-row-reverse">
                        <Col lg={6} className="mb-4 mb-lg-0 d-flex justify-content-center">
                            <div className="founder-image-container shadow-lg" style={{ borderColor: LIGHT_BLUE_ACCENT }}>
                                <img 
                                    src={FounderProfileImg} 
                                    alt="Founder Profile" 
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col lg={6} className="pe-lg-5">
                            <h3 className="sub-heading" style={{ color: LIGHT_BLUE_ACCENT }}>A Message from the Founder</h3>
                            <blockquote className="blockquote founders-quote">
                                "Our mission from day one has been to simplify the complexities of property transactions. 
                                We don't just sell houses; we facilitate the next chapter of your life. Every client matters, 
                                and every home has a story. Let us help you write yours."
                            </blockquote>
                            <footer className="blockquote-footer mt-3 fs-5 text-dark">
                                Jane Doe
                                <p className="text-muted small mb-0">CEO & Founder, Residly</p>
                            </footer>
                            <a 
                                href="https://wa.me/1234567890" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="d-inline-flex align-items-center mt-4 whatsapp-link"
                                style={{ color: LIGHT_BLUE_ACCENT }}
                            >
                                <FaWhatsapp className="me-2 fs-4" /> Message Jane on WhatsApp
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 5. TEAM/VALUES SECTION (A simple concluding section) */}
            <section className="team-values-section py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <h2 className="text-white">Our Core Values</h2>
                            <p className="text-white-50">
                                Integrity, Innovation, and Client-First Service. We empower our team to act as trusted advisors, 
                                ensuring you receive unbiased and expert guidance at every turn.
                            </p>
                            <a href="/contact" className="btn btn-lg fw-bold mt-3 team-cta-btn" style={{ backgroundColor: LIGHT_BLUE_ACCENT, borderColor: LIGHT_BLUE_ACCENT }}>
                                Meet The Team
                            </a>
                        </Col>
                        <Col lg={6}>
                             <img 
                                src={TeamBuildingImg} 
                                alt="Team Meeting" 
                                className="img-fluid about-image shadow-lg"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default About;

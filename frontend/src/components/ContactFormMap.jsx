import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactFormMap = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };
    
    const delhiMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9670921062766!2d77.21775437549857!3d28.570750875698582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dcae22e57%3A0xb8499e918c1a3869!2sE-38%2C%20South%20Extension%20I%2C%20Block%20E%2C%20New%20Delhi%2C%20Delhi%20110049!5e0!3m2!1sen!2sin!4v1744645173014!5m2!1sen!2sin" 

    return (
        <div className="contact-map-wrapper-reduced"> 
            <Container fluid className="h-100 p-0">
                <Row className="g-0 h-100">
                    
                    <Col md={6} className="h-100">
                        <div className="light-form-container p-4"> 
                            
                            <h2 className="fw-bold mb-1 fs-4 text-dark">Get In Touch With Us</h2> 
                            <p className="lead mb-3 small text-muted">Get Real Help From The Best Real Estate Agent In South Delhi!</p>
                            
                            <Form onSubmit={handleSubmit} className="h-100 d-flex flex-column justify-content-between">
                                
                                <Row className="mb-2 g-2"> {/* Reduced bottom margin to mb-2 */}
                                    <Col xs={3}>
                                        <Form.Group controlId="formTitle">
                                            <Form.Select required className="standard-form-input">
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Miss">Miss</option>
                                                <option value="Dr">Dr</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={9}>
                                        <Form.Group controlId="formFullName">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Full Name" 
                                                required 
                                                className="standard-form-input" 
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Group controlId="formMobile" className="mb-2"> {/* Reduced bottom margin to mb-2 */}
                                    <Form.Control 
                                        type="tel" 
                                        placeholder="Mobile" 
                                        required 
                                        className="standard-form-input" 
                                    />
                                </Form.Group>
                                
                                <Form.Group controlId="formEmail" className="mb-2"> {/* Reduced bottom margin to mb-2 */}
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email" 
                                        required 
                                        className="standard-form-input" 
                                    />
                                </Form.Group>
                                
                                <Row className="mb-1 g-2"> {/* Reduced bottom margin to mb-1 */}
                                    <Col xs={6}>
                                        <div className="form-selector-header-light">
                                            How did you find us?
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-selector-header-light">
                                            Interested In
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mb-3 g-2"> {/* Reduced bottom margin to mb-3 */}
                                    <Col xs={6}>
                                        <Form.Group controlId="formSource">
                                             <Form.Select required className="standard-form-input">
                                                <option value="Word of Mouth">Word of Mouth</option>
                                                <option value="Website">Website</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Online Advertisement">Online Advertisement</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    
                                    <Col xs={6}>
                                        <Form.Group controlId="formInterest">
                                            <Form.Select required className="standard-form-input">
                                                <option value="Sale">Sale</option>
                                                <option value="Purchase">Purchase</option>
                                                <option value="Rent">Rent</option>
                                                <option value="Collaboration">Collaboration</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <Form.Group controlId="formMessage" className="mb-3 flex-grow-1">
                                    <Form.Control 
                                        as="textarea" 
                                        rows={2} 
                                        placeholder="Message" 
                                        required 
                                        className="standard-form-input message-textarea-reduced" 
                                    />
                                </Form.Group>
                                
                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="btn-lg w-100 rounded-0 border-0 fw-bold submit-btn-orange" 
                                >
                                    SUBMIT
                                </Button>
                            </Form>
                        </div>
                    </Col>

                    <Col md={6} className="h-100">
                        <div className="map-embed-container"> 
                            <iframe
                                title="Google Map of Royale Realtors India, Delhi"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src={delhiMapEmbedUrl}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactFormMap;
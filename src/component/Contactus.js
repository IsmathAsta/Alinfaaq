import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Contactus() {
    return (
        <>
            <div className="aboutus_bg">
                <div className="aboutus-img-content">

                    <h2>
                        Contact us
                    </h2>

                </div>
            </div>
            <div className="contact-section">
                <Container>
                    <Row className="align-items-center">
                        {/* Left Section */}
                        <Col sm={12} lg={6} md={12}>
                            <div className="contact-info">
                                <div className="info-line"></div>
                                <h1>For any inquiries,Reach out to our dedicated  &nbsp;
                                    <span className="highlight-text">support team now!</span> 
                                </h1>
                                {/* <h2>
                  
                </h2> */}

                            </div>
                            {/* <p style={{paddingLeft:'10%',fontSize:'18px',lineHeight:'1.8',color:'#6d6d6d'}}>
                  We’re available for 8 hours a day!<br/> Contact to require a
                  detailed analysis and assessment of your plan.
                </p> */}
                        </Col>

                        {/* Right Section */}
                        <Col sm={12} lg={6} md={12}>
                            <div className="contact-details text-center">
                                <div className="contact-icon">
                                    <i class="fa-solid fa-phone-flip"></i>
                                </div>
                                <h6>REACH OUT NOW!</h6>
                                <h1 className="phone-number">+91-8220347600</h1>
                                <Button className="contact-button" onClick={() => window.open("https://wa.me/919585434368", "_blank")}>Chat us</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="py-5" >
                <Container>
                    <Row className="g-4">
                        {/* FAQs */}
                        <Col md={4} className="text-center">
                            <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f8f8f8" }}>
                                <i className="fa fa-phone fa-2xl" style={{ color: "#02192b", marginTop: '10%', marginBottom: '16%' }}></i>
                                <h5 className="fw-bold" style={{ color: "#e69d00" }}>Contact</h5>
                                <p className="text-muted">
                                +91-9585434368

                                </p>

                            </div>
                        </Col>

                        {/* Headquarters */}
                        <Col md={4} className="text-center">
                            <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f8f8f8" }}>
                                <i className="fa fa-location-dot fa-2xl" style={{ color: "#02192b", marginTop: '10%', marginBottom: '16%' }}></i>
                                <h5 className="fw-bold" style={{ color: "#e69d00" }}>Address</h5>
                                <p className="text-muted">
                                    4A, South Mohideen Pallivasal Street,
                                    <br /> Melapalayam, Tirunelveli-627005
                                </p>

                            </div>
                        </Col>

                        {/* Working Hours */}
                        <Col md={4} className="text-center">
                            <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f8f8f8" }}>
                                <i className="fa fa-clock fa-2xl" style={{ color: "#02192b", marginTop: '10%', marginBottom: '16%' }}></i>
                                <h5 className="fw-bold" style={{ color: "#e69d00" }}>Working Hours</h5>
                                <p className="text-muted">
                                    Open Monday to Saturday <br /> From 07:00 AM to 10:00 PM
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
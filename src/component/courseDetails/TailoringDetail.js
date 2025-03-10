import React, { useState } from 'react';
import { Card, Button, Accordion, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const TailoringDetail = () => {
    const navigate = useNavigate(); 

    const handleScrollToContact = () => {
        // Navigate to contact page and append hash for scrolling to form
        navigate('/contactus#contact-form');
    };



    return (
        <>
            <div className='quranPge'>
                <div className="sewing_bg">
                    <div className="sewing-img-content">
                        <h1>தையல் பயிலகம்</h1>
                    </div>
                </div>
                <section>
                    <div className="header-section" style={{ fontFamily: 'lexend', color: '#ffce05' }}>
                        <h1 style={{ fontSize: '28px' }}>Master the Art of Tailoring with Our Professional Course</h1>

                    </div>
                </section>

                <Row style={{ margin: '0', padding: '0' }}>
                    <Col md={8} style={{ paddingLeft: "5%", lineHeight: '2.5' }}>

                        {/* Header Section */}
                        <section className="about-course" style={{ fontFamily: 'Roboto' }}>
                            <h2>About Course</h2>
                            <p style={{ textAlign: 'justify' }}>Tailoring is more than just stitching clothes—it’s about precision, creativity, and craftsmanship. Whether you’re a complete beginner or looking to refine your skills, our structured Tailoring Course will help you gain expertise in cutting, sewing, designing, and finishing garments professionally.

                                This course covers everything from understanding fabrics and measurements to creating stylish and well-fitted clothing. Learn from experienced professionals and turn your passion into a rewarding skill!

                            </p>
                        </section>

                        {/* What Will You Learn Section */}
                        <section className="learn-section" style={{ fontFamily: 'Roboto' }}>
                            <h2>What Will You Learn?</h2>
                            <ul>
                                <li>Basic & Advanced Stitching Techniques – Master hand-sewing and machine-stitching methods.</li>
                                <li>Fabric Knowledge & Cutting Techniques – Understand different fabrics and how to cut them precisely.</li>
                                <li>Pattern Making & Drafting – Learn to create and modify patterns for perfect fitting.</li>
                                <li>Sewing Women’s & Kids’ Garments – Stitch dresses, salwars, blouses, and more.</li>
                                <li>Alterations & Finishing Skills – Learn hemming, resizing, and adding final touches.</li>
                                <li>Fashion Design Basics – Understand color combinations, embroidery, and embellishments.</li>
                            </ul>
                        </section>

                        {/* Material Includes Section */}
                        {/* <section className="material-section" style={{ fontFamily: 'Roboto' }}>
              <h2>Material Includes</h2>
              <ul>
                <li>Hours of on-demand video</li>
                <li>50+ articles and texts</li>
              </ul>
            </section> */}

                        {/* Course Curriculum Section */}
                        <section className="curriculum-section" style={{ fontFamily: 'Roboto' }}>
                            <h2>Course Curriculum</h2>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Introduction to Tailoring</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Understanding sewing tools, equipment, and safety measures.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Basic Sewing Techniques</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Learning stitches, seams, and finishing methods.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Garment Construction </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Cutting and stitching various outfits with proper measurements.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Advanced Tailoring Techniques</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Designing stylish dresses, blouses, and ethnic wear.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </section>
                    </Col>
                    <Col md={4}>
                        {/* Sidebar Section */}
                        <div className="course-sidebar" style={{ fontFamily: 'Roboto' }}>
                            <Card className="sidebar-card">
                                <Card.Body>
                                    {/* YouTube Video */}
                                    <div className="video-container">
                                        <img src='images/sewing.jpg' style={{ width: '100%' }} />
                                    </div>

                                    {/* Pricing */}
                                    <h3 className="course-price"></h3>

                                    <Button variant="primary" onClick={handleScrollToContact} className="add-to-cart">Enrol Now</Button>
                                    {/* <Button variant="outline-primary" className="buy-course" block>Buy Course</Button> */}

                                    {/* <hr className="course-divider" /> */}
                                    &nbsp;
                                    {/* Course Details */}
                                    <ul className="course-includes">
                                        {/* <li><strong>Lectures:</strong> 12</li> */}
                                        <li><strong>Duration:</strong> 10h 30m</li>
                                        <li><strong>Skill Level:</strong>Beginner to Advanced</li>
                                        <li><strong>Language:</strong> Tamil</li>
                                        {/* <li><strong>Deadline:</strong> November 29, 2024</li> */}
                                        <li><strong>Certificate:</strong> Yes</li>
                                    </ul>

                                </Card.Body>

                            </Card>

                        </div>
                    </Col>
                </Row>
                {/* About Course Section */}
            </div>
        </>
    );
};

export default TailoringDetail;

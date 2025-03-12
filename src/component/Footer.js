import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-5 footer_bg">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img
                                src="images/logos.jpg"
                                className="al_quran"
                                alt="logo"
                                style={{ width: '30%', height: 'auto',borderRadius:'15px' }} loading="lazy" />
                            <hr className="logo-line" />
                            <p>நமது செயல்பாடுகள் அனைத்தும் நல்லுள்ளம் கொண்ட சகோதரர்களிடம் சாந்தா வசூல் செய்து அதன் மூலம் நற்பணிகளை மேற்கொண்டு வருகிறோம்..</p>
                           
                            <div className="d-flex justify-content-start" style={{ paddingBottom: '10px' }}>
                                <a href="https://facebook.com" className="text-light mx-2 social-icon "><i className="fa-brands fa-facebook-f fa-xl"></i></a>
                                <a href="https://twitter.com" className="text-light mx-2 social-icon"><i className="fa-brands fa-youtube fa-xl"></i></a>
                                <a href="https://youtube.com" className="text-light mx-2 social-icon"><i className="fa-brands fa-instagram fa-xl"></i></a>
                                <a href="https://instagram.com" className="text-light mx-2 social-icon"><i className="fa-brands fa-twitter fa-xl"></i></a>
                            </div>
                        </Col>

                        <Col md={4} style={{  lineHeight: '2.2' }}>
                            <h5>Address:</h5>
                            
                            <p> <i className="fa fa-location-dot"></i>&nbsp; 4A, South Mohideen Pallivasal Street,<br/> Melapalayam, Tirunelveli-627005</p>
                            <h5>Whatsapp:</h5>
                            <p><i className="fa-brands fa-whatsapp fa-xl"></i>&nbsp;  +91-9585434368 / 
                            +91-8220347600 </p>
                            {/* <h5>Email:</h5>
                            <p> <i className="fa fa-envelope"></i>&nbsp; teacher@readnlearn.uk</p> */}
                            
                        </Col>

                        

                        <Col md={4}>
                            <div className="quick-links">
                                <h5>Explore Link</h5>
                                <ul>
                                    <li>About us</li>
                                    <li>Serivce</li>
                                    <li>Programes</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </footer>
            <div className="footer-bottom" style={{ fontFamily: "Roboto" }}>
                <p> ©  Infaaq Trust-2016 - All Rights Reserved | Created by <span className="gradient-text"><a href="https://dgbirdmedia.com/" target="_blank" style={{ textDecorationLine: 'none' }}>Asta Systech</a></span> </p>
            </div>
        </>
    )
}
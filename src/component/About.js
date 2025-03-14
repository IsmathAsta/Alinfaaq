import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function About() {
    const notices = [
        { title: "👗 Tailoring Course", date: "Ongoing Registrations", details: "Learn professional tailoring skills with hands-on training." },
        { title: "🧵 Embroidery & Aari Work", date: "Ongoing Registrations", details: "Master embroidery and aari work techniques for traditional designs." },
        { title: "💻 Software Development Course", date: "Ongoing Registrations", details: "Full-stack development training in React, Node.js, and databases." },
        
    ];

    const navigate = useNavigate();
    const navigateToAboutUs = () => {
        navigate("/aboutus");
    };

    return (
        <>
            <div className="aboutus_bg_content">
                <div className="aboutus-content">
                    <Container>
                        <Row style={{ margin: '0' }}>
                            <Col sm={12} md={12} lg={6}>
                                <div className="main-content">
                                    {/* <div className="main-heading">
                                        <p>ABOUT US</p>
                                    </div> */}
                                    <div className="welcome-heading">
                                        <h5 style={{ color: '#e69d00' }}>About Us</h5>
                                        <h1>Allah Help Those Who Help Themselves</h1>
                                    </div>
                                    <div className="about-para">
                                        <p style={{ fontFamily: "Roboto", fontSize: '16px' }}>Al-Infaaq Trust என்பது 2016 ஆம் ஆண்டில் ஆரம்பிக்கப்பட்டது, சமூகத்தில் பொருளாதார ரீதியாக பின் தங்கியுள்ள குடும்பங்களை அடையாளம் காண்ந்து, அவர்களுக்கு தேவையான உதவிகளை வழங்கும் நோக்குடன் செயல்படுகிறது. ஒரே ஒரு குடும்பத்துடன் தொடங்கிய இந்த நற்செயல், இன்று 30+ குடும்பங்களுக்கு உதவியாக வளர்ந்துள்ளது.</p>
                                            <h4 style={{fontWeight:'bold'}}>
                                                எங்கள் நோக்கம்
                                            </h4>
                                            <ul style={{ fontSize: '16px' ,lineHeight:'1.9'}}>
                                                <li>ஆதரவற்ற குடும்பங்களுக்கு <b>அத்தியாவசிய உதவிகள்</b> வழங்குதல்.</li>
                                                <li>பெண்களுக்கு <b>சுயதொழில் பயிற்சி</b> மற்றும் <b>பணிபல வாய்ப்புகளை</b> உருவாக்குதல்.</li>
                                                <li>மாணவர்களுக்கு <b>தகவல் தொழில்நுட்ப (IT) கல்வி</b> பயிற்சிகளை வழங்குதல்.</li>
                                            </ul>
                                            {/* <span className="read-more" onClick={navigateToAboutUs}>
                                                <b>மேலும் படிக்க ▶</b>
                                            </span> */}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={6} className="d-flex justify-content-center align-items-center">
                                <div className="notice-board">
                                    <h3 style={{ color: '#e69d00' }}><i className="fa-solid fa-bullhorn"></i> NOTICES</h3>
                                    <div className="notices-list">
                                        {notices.map((notice, index) => (
                                            <div className="notice-item" key={index}>
                                                <h4>{notice.title}  - {notice.date} </h4>
                                                <span>{notice.details}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>


        </>
    )
}
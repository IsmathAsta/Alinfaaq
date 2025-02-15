import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function About() {
    const notices = [
        { title: "Soccer Tournament Timetable", date: "June 1, 2021", category: "Sport" },
        { title: "Annual Marathon Registration", date: "May 28, 2021", category: "Sport" },
        { title: "Traffic Safety Notice", date: "May 23, 2021", category: "Community" },
        { title: "Upcoming Public Meetings", date: "May 15, 2021", category: "Community" },
        { title: "Soccer Tournament Timetable", date: "June 1, 2021", category: "Sport" },
        { title: "Annual Marathon Registration", date: "May 28, 2021", category: "Sport" },
        { title: "Traffic Safety Notice", date: "May 23, 2021", category: "Community" },
        { title: "Upcoming Public Meetings", date: "May 15, 2021", category: "Community" },
        { title: "Soccer Tournament Timetable", date: "June 1, 2021", category: "Sport" },
        { title: "Annual Marathon Registration", date: "May 28, 2021", category: "Sport" },
        { title: "Traffic Safety Notice", date: "May 23, 2021", category: "Community" },
        { title: "Upcoming Public Meetings", date: "May 15, 2021", category: "Community" },
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
                                        <p style={{ fontFamily: "Roboto",fontSize:'16px' }}>நமது AL-INFAAQ TRUST ஆனது 2016 ஆம் ஆண்டு மக்களின் நலன் கருதி தொடங்கப்பட்டது. நமது முக்கிய நோக்கம், பொருளாதாரத்தில் பின்தங்கியுள்ள மற்றும் தேவையுள்ள குடும்பங்களை அடையாளம் காண்ந்து, அவர்களுக்கு மாதந்தோறும் அத்தியாவசிய மளிகை பொருட்களை வழங்குவதாகும். இதன் மூலம், அவர்கள் தினசரி வாழ்க்கையில் நம்பகமான ஆதரவினைப் பெறுவதோடு, உணவு பற்றாக்குறையால் ஏற்படும் சிரமங்களை குறைக்கவும் உதவுகின்றோம்.<br />
                                            <span className="read-more" onClick={navigateToAboutUs}>
                                                <b>மேலும் படிக்க ▶</b>
                                            </span></p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                                <div className="notice-board">
                                    <h3 style={{color:'#e69d00'}}><i className="fa-solid fa-bullhorn"></i> NOTICES</h3>
                                    <div className="notices-list">
                                        {notices.map((notice, index) => (
                                            <div className="notice-item" key={index}>
                                                <h4>{notice.title}</h4>
                                                <span>{notice.date} in <strong>{notice.category}</strong></span>
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
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
    const { t } = useTranslation();
    const notices = [
        {
            title: "👗 Tailoring Course",
            date: "Ongoing Registrations",
            details: "Click Here to Apply",
            link: ""
        },

        {
            title: "💻 Software Development Course",
            date: "Ongoing Registrations",
            details: "Click Here to Apply",
            link: '/courses/sdc-register'

        },
        {
            title: "🧵 Embroidery & Aari Work",
            date: "Coming Soon",
            details: "Master embroidery and aari work techniques for traditional designs."
        },

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
                                        <p style={{ fontFamily: "Roboto", fontSize: '16px' }}>{t("AboutUsContent")}</p>
                                        <h4 style={{ fontWeight: 'bold' }}>
                                            {t("OurMission")}
                                        </h4>
                                        <ul style={{ fontSize: '16px', lineHeight: '1.9' }}>
                                            <li dangerouslySetInnerHTML={{ __html: t("Mission1") }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: t("Mission2") }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: t("Mission3") }}></li>
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
                                                {notice.link ? (
                                                    <Link to={notice.link} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>
                                                        {notice.details}
                                                    </Link>
                                                ) : (
                                                    <span>{notice.details}</span>
                                                )}
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
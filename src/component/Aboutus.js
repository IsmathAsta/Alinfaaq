import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Aboutus() {
    const {t} = useTranslation()
    return (
        <>
            <div className="aboutus_bg">
                <div className="aboutus-img-content">
                   
                    <h2>
                    About us
                    </h2>
                   
                </div>
            </div>
            <div className="aboutus-content pt-5">
                <Container className="main-about">
                    <Row style={{ margin: '0' }} className="d-flex align-items-stretch">
                        <Col md={6}>
                            <div className="image-madar h-80">
                                <img src="images/donbg.jpg" alt="images" style={{ width: '100%', objectFit: 'fill' }} className="madar-imgs" />
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className="main-content d-flex flex-column justify-content-center">
                                <div className="welcome-heading">
                                    <h2 >{t("about_us_heading")}<span style={{ color: "#e69d00" }}></span></h2>
                                </div>
                                <div className="about-para" style={{ fontFamily: "Roboto" }}>
                                <p>{t("about_us_content")}</p>
                                    <h3>{t("our_mission")}</h3>
                                    <ul>
                                        <li>{t("mission_1")}</li>
                                        <li>{t("mission_2")}</li>
                                        <li>{t("mission_3")}</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* சேவைகள் பகுதி */}
                <div className=" mt-5 activity-bg pb-5">
                    <h1 className="text-center pt-5 pb-4" style={{ color: "#e69d00" }}>{t("activity")}</h1>
                    <Container>
                        <Row className="text-center ">
                            {[
                               { key: "family_assistance", icon: "fa-hands-helping" },
                               { key: "education", icon: "fa-user-graduate" },
                               { key: "housing", icon: "fa-home" },
                               { key: "social_help", icon: "fa-users" },
                               { key: "vocational_training", icon: "fa-chalkboard-teacher" },
                               { key: "donation", icon: "fa-gift" }
                            ].map((item, index) => (
                                <Col md={4} sm={6} key={index} className="mb-4">
                                    <div className="service-box p-4 shadow-sm bg-white">
                                        <div className="icon mb-3" style={{ fontSize: "2rem", color: "#e69d00" }}>
                                            <i className={`fa ${item.icon}`}></i>
                                        </div>
                                        <h5><b>{t(item.key)}</b></h5>
                                        <p>{t("activity_description", { activity: t(item.key) })}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className="volunteer-bg">
                    <div className="volunteer-content">
                        <h1>{t("elevate_lives")}<br />{t("donate_today")}</h1>
                            <div className="text-center">
                        <button className="donate-btn">Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
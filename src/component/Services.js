import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();

    const courses = [
        {
            title: t("monthly_essentials"),
            description: t("monthly_essentials_desc"),
            icon: "images/grocery.png",
            link: '/quran'
        },
        {
            title: t("medical_education_fund"),
            description: t("medical_education_fund_desc"),
            icon: "images/fund.png",
            link: '/hifz'
        },
        {
            title: t("self_employment_support"),
            description: t("self_employment_support_desc"),
            icon: "images/self.png",
            link: '/hifz'
        },
        {
            title: t("scholarship_assistance"),
            description: t("scholarship_assistance_desc"),
            icon: "images/edu.png",
            link: '/hifz'
        },
    ]
    return (
        <>
            <div className="course_bg">
                <Container>
                <div className="course-main-content">
                    <div className="course-heading">
                        <h6>Activities</h6>
                        <h1 style={{ color: '#e69d00' }}>{t("services_support")}</h1>
                        {/* <h4 style={{color:'#1d8e5a' }}>to enrich your faith & knowledge!</h4> */}
                    </div>
                    <div className="course-list">
                    <Row className="services-list">
                    {courses.map((course, index) => (
                        <Col sm={12} lg={3} md={12} key={index} className="services-card mb-2">
                            <div className="service-item">
                                <div className="service-icon">
                                    <img src={course.icon} alt={course.title} />
                                </div>
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                {/* <a href={course.link} className="read-more">Read More &rarr;</a> */}
                            </div>
                        </Col>
                    ))}
                </Row>
            
                        
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ServicePage(){
    const {t} = useTranslation()
    const reasons = [
        {
            icon: "fa-shopping-bag",
            title: t("monthly_essentials"),
            description: t("monthly_essentials_desc"),
        },
        {
            icon: "fa-hand-holding-heart",
            title: t("helping_the_needy"),
            description: t("helping_the_needy_desc"),
        },
        {
            icon: "fa-stethoscope",
            title: t("medical_education_fund"),
            description: t("medical_education_fund_desc"),
        },
        {
            icon: "fa-briefcase",
            title: t("self_employment_support"),
            description: t("self_employment_support_desc"),
        },
        {
            icon: "fa-university",
            title: t("government_welfare_awareness"),
            description: t("government_welfare_awareness_desc"),
        },
        {
            icon: "fa-graduation-cap",
            title: t("scholarship_assistance"),
            description: t("scholarship_assistance_desc"),
        },
        {
            icon: "fa-cut",
            title: t("free_tailoring_training"),
            description: t("free_tailoring_training_desc"),
        },
        {
            icon: "fa-laptop",
            title: t( "free_it_training"),
            description: t( "free_it_training_desc"),
        },
    ];

    return(
        <>
        <div className="aboutus_bg">
                <div className="aboutus-img-content">
                   
                    <h2>
                       Services
                    </h2>
                   
                </div>
            </div>
        <div className="why-choose-us-section">
            <div className="text-center mb-5">
                <h5 className="text-success"></h5>
                <h2 style={{fontFamily:'lexend', color:'#E69D00'}}>Our Services</h2>
            </div>
            <Container>
                <Row className="justify-content-center whychoosee" style={{ fontFamily: "Roboto" }}>
                    {reasons.map((reason, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="why-choose-card text-center">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <Card.Body style={{paddingTop:'20%'}}>
                                            <div className="icon-containerss mb-3">
                                            <i className={`fa ${reason.icon} fa-3x mb-3`}></i>
                                            </div>
                                            <Card.Title style={{color:'#E69D00'}}>{reason.title}</Card.Title>
                                            <Card.Text>{reason.description}</Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="card-back">
                                    <Card.Body style={{paddingTop:'20%'}}>
                                            <div className="icon-containerss mb-3">
                                            <i className={`fa ${reason.icon} fa-3x mb-3`} style={{color:'#E69D00'}}></i>
                                            </div>
                                            <Card.Title>{reason.title}</Card.Title>
                                            <Card.Text>{reason.description}</Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        </>
    )
}
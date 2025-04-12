import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export default function Courses() {
    const {t} = useTranslation()
    const courses = [
        {
            image: "images/sewing.jpg",
            title: t("courses.tailoring.title"),
            description: t("courses.tailoring.description"),
            link: '/tailoringDetail'
        },
        {
            image: "images/aari.jpg",
            title: t("courses.embroidery.title"),
            description: t("courses.embroidery.description")
        },
        {
            image: "images/computer.jpg",
            title: t("courses.software.title"),
            description: t("courses.software.description"),
            link: '/softwareDetail'
        },
    ];

    const navigate = useNavigate();

    const handleCourseDetail=(link)=>{
        navigate(link)
    }

    return (
        <>
            <div className="popularcls-mainhead">
                <div className="classes-heading text-center" style={{fontFamily:"lexend",paddingBottom:"2%"}}>
                    <h5 >{t("courses.heading")}</h5>
                    <h2 style={{color:'#e69d00',textTransform:"uppercase" }}>{t("courses.subheading")}</h2>
                </div>
                <Container>
                    <Row className="popcourse-card" style={{ fontFamily: "Roboto" }}>
                        {courses.map((course, index) => (
                            <Col sm={12} md={12} lg={4} key={index} className="mb-3">
                                <Card className="course-card mb-4">
                                    <Card.Img variant="top" src={course.image} />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <Card.Title>
                                            <h2 style={{fontFamily:"Roboto"}}>{course.title}</h2>

                                        </Card.Title>
                                        <Card.Text style={{fontFamily:"Roboto"}}>
                                            {course.description}
                                        </Card.Text>
                                        <div className="lastpart">
                                            <Button variant="success" className="mb-3" onClick={()=>handleCourseDetail(course.link)}>  {t("courses.register")}</Button>
                                           
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
            
            
            
        </>
    );
}

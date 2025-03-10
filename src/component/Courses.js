import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Courses() {
    const courses = [
        {
            image: "images/sewing.jpg",
            title: "தையல் பயிலகம்",
           description:"பெண்களுக்கு தையல் கற்றுத் தரும் இப்பயிற்சி, சுயதொழிலுக்கான முதன்மையான படியாக விளங்கும்.  இந்த வகுப்புகள் மூலம், பெண்கள் தன்னம்பிக்கையுடன் சுயதொழிலில் ஈடுபடலாம்.",
           link:'/tailoringDetail'
        },
        {
            image: "images/aari.jpg",
            title: "எம்பிராய்டரி & ஆரி வேலை பயிற்சி",
            description:'எம்பிராய்டரி & ஆரி வேலை வேலைப்பாடுகளில் திறமை வளர்த்து, தொழில்முனைவோராக உருவாக சிறந்த வாய்ப்பை வழங்கும். பெண்கள் தன்னம்பிக்கையுடன் முன்னேறலாம்'
        },
        {
            image: "images/computer.jpg",
            title: "சாப்ட்வேர் கோர்ஸ் பயிற்சி",
            description:'மாணவர்கள் மற்றும் இளைஞர்களுக்கான அடிப்படை & மேம்பட்ட கணினி பயிற்சி, தொழில்நுட்ப உலகில் முன்னேறவும் கற்றுத் திறன் வளர்க்கவும் உதவும். இப்பயிற்சி வேலை வாய்ப்புகளை பெறவும், சுயதொழில் உருவாக்கவும் உதவுகிறது.'
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
                    <h5 >SKILL DEVELOPMENT COURSES</h5>
                    <h2 style={{color:'#e69d00',textTransform:"uppercase" }}>Our Free Training & Educational Courses</h2>
                </div>
                <Container>
                    <Row className="popcourse-card" style={{ fontFamily: "Roboto" }}>
                        {courses.map((course, index) => (
                            <Col sm={12} md={12} lg={4} key={index} className="mb-3">
                                <Card className="course-card mb-4">
                                    <Card.Img variant="top" src={course.image} />
                                    <Card.Body >
                                        <Card.Title>
                                            <h2 style={{fontFamily:"Roboto"}}>{course.title}</h2>

                                        </Card.Title>
                                        <Card.Text style={{fontFamily:"Roboto"}}>
                                            {course.description}
                                        </Card.Text>
                                        <div className="lastpart">
                                            <Button variant="success" className="mb-3" onClick={()=>handleCourseDetail(course.link)}>Register Now </Button>
                                           
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

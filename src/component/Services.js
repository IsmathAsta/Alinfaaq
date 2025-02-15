import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Services() {
    const courses = [
        {
            title: "மாதாந்திர அத்தியாவசிய பொருட்கள்",
            description: "நாம் 30 க்கும் மேற்பட்ட குடும்பங்களுக்கு மாதந்தோறும் அவர்கள் குடும்பத்திற்கு தேவையான மளிகை பொருட்களை கொடுத்து வருகிறோம்.",
            icon: "images/grocery.png",
            link: '/quran'
        },
        {
            title: "மருத்துவம், கல்வி உதவித்தொகை",
            description: "நாம் பராமரிக்கும் குடும்பங்களுக்கு அவசர மருத்துவச் செலவுகள், கல்விக்கான ஆதரவு, மற்றும் மாணவர்களுக்கு உதவித்தொகை வழங்கி, அவர்களின் நல்லதிர்கால வளர்ச்சிக்கு துணையாக இருக்கிறோம்.",
            icon: "images/fund.png",
            link: '/hifz'
        },
        {
            title: "சுய தொழில் உதவி",
            description: "நாம் பராமரிக்கும் குடும்பங்களில் சுய தொழில் செய்ய விரும்புவோருக்கு சுய தொழிலும் ஏற்படுத்தி கொடுக்கின்றோம். பொது மக்களுக்கு உதவும் வகையில் அரசு நல திட்டங்கள் முகாம்கள் நடத்தி அவர்களுக்கு ஆன்லைன் ல் (online) விண்ணப்பித்து கொடுக்கின்றோம்..",
            icon: "images/self.png",
            link: '/hifz'
        },
        {
            title: "உதவித்தொகை (Scholarship)",
            description: "மாணவ,மாணவிகளுக்கு அரசு மற்றும் தனியார் நிறுவங்கள் வழங்கும் உதவி தொகை (scholarship) கிடைக்கும் வகையில் முகாம்கள் நடத்தி அவர்களுக்கு விண்ணப்பித்து கொடுக்கின்றோம்..",
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
                        <h1 style={{ color: '#e69d00' }}>Services and Support</h1>
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
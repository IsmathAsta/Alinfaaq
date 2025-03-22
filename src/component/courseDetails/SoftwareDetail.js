import React, { useState } from 'react';
import { Card, Button, Accordion, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SoftwareDetail = () => {
    const navigate = useNavigate(); 

    const handleScrollToContact = () => {
        // Navigate to contact page and append hash for scrolling to form
        navigate('/courses/sdc-register');
    };



    return (
        <>
            <div className="bg-dark text-white">
      {/* Hero Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col sm={12} md={12} lg={6}>
            <h1 className="fw-bold">Full Stack Web Development</h1>
            <p className="mt-3">
            Master Full Stack Development to build complete, dynamic web applications, covering both front-end and back-end technologies with real-world projects.
            </p>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              <span className="badge bg-secondary p-2"><i class="fa-solid fa-clock-rotate-left" style={{color: "#ffffff"}}></i> 6 Month Course</span>
              <span className="badge bg-secondary p-2"><i class="fa-regular fa-hourglass-half" style={{color: "#ffffff"}}></i> 1 Hour Session</span>
              <span className="badge bg-secondary p-2"><i class="fa-solid fa-book-open" style={{color: "#ffffff"}}></i> 50+ Lessons</span>
            </div>
            <Button variant="primary" className="mt-4 p-3 px-5" onClick={handleScrollToContact}>
              Register Now
            </Button>
          </Col>
          <Col sm={12} md={12} lg={6} className="text-center">
            <img
              src="https://via.placeholder.com/400" // Replace with your image URL
              alt="UI/UX Design"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Course Details Section */}
      <Container fluid className="bg-light text-dark py-5">
        <Row>
          <Col sm={12} md={12} lg={2} className="ps-5">
            <ul className="list-unstyled">
              <li className="fw-bold">Course Overview</li>
              <li>What you'll learn</li>
              <li>Syllabus</li>
              <li>Course Instructor</li>
              <li>Projects</li>
              <li>Student Review</li>
            </ul>
          </Col>
          <Col sm={12} md={12} lg={10} className="px-5">
            <h2 className="fw-bold">Full Stack Web Development Course</h2>
            <hr />
            <p>
            This comprehensive course will equip you with the essential skills to build complete web applications, covering both front-end and back-end development. Whether you aim to become a full-stack developer or enhance your web development expertise, this course provides a strong foundation to create dynamic, responsive, and scalable applications. 
            </p>
            <h3 className="fw-bold">Prerequisites</h3>
            <hr />
            <p> No prior programming experience is required; however, basic computer literacy and problem-solving skills will be beneficial. </p>

            <div className="py-5">
      {/* What You'll Learn Section */}
      <h2 className="fw-bold">What you'll learn</h2>
      <hr />
      <Row className="gy-4">
        <Col sm={12} md={12} lg={3}>
          <h4 style={{color:'#064683'}} className="fw-bold">01</h4>
          <h5 className="fw-bold">Building the Web</h5>
          <p>Understand how websites are structured using HTML, styled with CSS, and made interactive with JavaScript.</p>
        </Col>
        <Col sm={12} md={12} lg={3}>
          <h4 className="fw-bold" style={{color:'#064683'}}>02</h4>
          <h5 className="fw-bold">Creating Engaging Interfaces</h5>
          <p>Learn to develop dynamic and responsive user experiences using modern front-end frameworks and state management techniques.</p>
        </Col>
        <Col sm={12} md={12} lg={3}>
          <h4 className="fw-bold" style={{color:'#064683'}}>03</h4>
          <h5 className="fw-bold">Powering the Backend</h5>
          <p>Explore server-side programming, database management, and API development to handle data and user interactions.</p>
        </Col>
        <Col sm={12} md={12} lg={3}>
          <h4 className="fw-bold" style={{color:'#064683'}}>04</h4>
          <h5 className="fw-bold">Bringing Projects to Life</h5>
          <p> Master version control with Git and deploy applications seamlessly on cloud platforms for real-world accessibility.</p>
        </Col>
      </Row>

      {/* Syllabus Section */}
      <h2 className="fw-bold mt-5">Syllabus</h2>
      <hr />
      <Row className="gy-4">
        <Col sm={12} md={12} lg={6}>
          <h4 className=""><span style={{color:'#064683'}}>01</span> Fundamentals of Web Development:</h4>
         
          <ul className="section-title">
            <li>HTML5 for structuring</li>
            <li>CSS3 for styling</li>
            <li>JavaScript for interactivity</li>
          </ul>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h4 className=""><span style={{color:'#064683'}}>02</span> Front-End Development</h4>
          <h5 className="fw-bold"></h5>
          <ul className="section-title">
            <li>JavaScript Frameworks</li>
            <li>DOM Manipulation</li>
            <li>State Management (e.g., Redux, Context API)</li>
            <li>Responsive Web Design</li>
          </ul>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h4 className=""><span style={{color:'#064683'}}>03</span>  Back-End Development</h4>
          <h5 className="fw-bold"></h5>
          <ul className="section-title">
            <li>Server-Side Languages like Node.js</li>
            <li>Databases like MongoDB or MySQL. </li>
            <li>APIs and RESTful APIs</li>
          </ul>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h4 className=""><span style={{color:'#064683'}}>04</span> Other Important Topics</h4>
          <h5 className="fw-bold"></h5>
          <ul className="section-title">
            <li>Version Control (Git)</li>
            <li>Deployment</li>
            <li>Work on real-world projects</li>
          </ul>
        </Col>
        {/* <Col md={6}>
          <h4 className=""><span style={{color:'#064683'}}>05</span> UI Design Tools and Techniques</h4>
          <h5 className="fw-bold"></h5>
          <ul  className="section-title">
            <li>Fundamentals of information architecture (IA)</li>
            <li>Creating user flows and navigation systems</li>
            <li>Principles of organizing content for optimal usability</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4 className=""><span style={{color:'#064683'}}>06</span> Interaction Design and Microinteractions</h4>
          <h5 className="fw-bold"></h5>
          <ul className="section-title">
            <li>Principles of interaction design</li>
            <li>Designing intuitive and engaging user interactions</li>
            <li>Exploring microinteractions impact on UX</li>
          </ul>
        </Col> */}
      </Row>
    </div>
          </Col>
        </Row>
        
      </Container>
      
      
    </div>

    
        </>
    );
};

export default SoftwareDetail;

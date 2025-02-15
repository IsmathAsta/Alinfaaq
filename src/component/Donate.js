import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Donate() {
    return (
        <>
            <div className="donate-bg">
                <Container>
                    <Row>
                        <h2 style={{textAlign:'center',color:'#e69d00',fontWeight:'bold'}}>DONATE NOW</h2>
                        <Col md={6} className="d-flex justify-content-center align-items-center mb-2">

                                <div className="account-detail ">
                                    <div className="d-flex justify-content-between">
                                        <span><strong >A/C Name:</strong> Infaaq Trust</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><strong>A/C Number:</strong> 561701010030325</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><strong>IFSC Code:</strong> UBIN0556173</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><strong>Bank Name:</strong> Union Bank of India</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span><strong>Branch:</strong> Melapalayam</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex justify-content-center scan-me">
                            <img src="images/qr.png" alt="scan-me" width={'50%'}/>
                            </Col>
                    </Row>
                </Container>
            </div>
            <div className="quick_bg_content" style={{ fontFamily: "Roboto" ,marginTop:'5%'}}>
        <div className="quick-heading">
          

          <div className="icon-button">
            <img src="images/quran.png" alt="quran-verse" width={'50%'}/>
          </div>
          <div className="quick-headerr">
            <h3 className="fw-bold">
            ஈமான் கொண்டவர்களே! நீங்கள் உண்மையாக முஃமின்களாக இருந்தால், அல்லாஹ்வுக்கு அஞ்சியடங்கி, எஞ்சியுள்ள வட்டியை வாங்காது விட்டு விடுங்கள்
            </h3>
          </div>
        </div>
      </div>
        </>
    )
}
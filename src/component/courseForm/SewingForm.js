import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { useTranslation } from "react-i18next";

export default function SewingForm() {
const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
    gender: '',
    age: '',
    address:'',
    mobile: '',
    education: '',
    occupation: '',
    timeSlot: '',
    parentSpouseName: '',
    hasStartBusiness: '',
    hasExperience: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('')



    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form
    const validateForm = () => {
        let newErrors = {};

        if (!formData.name || formData.name.length > 100) {
            newErrors.name = "Name is required (Max 100 characters)";
        }
        if (!formData.gender) {
            newErrors.gender = "Please select a gender.";
        }
        if (!formData.age || formData.age < 16 || formData.age > 35) {
            newErrors.age = "Age must be between 16 and 35.";
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
  
        if (!formData.hasExperience) {
            newErrors.hasExperience = "Please select your experience level.";
        }
        if (!formData.timeSlot) {
            newErrors.timeSlot = "Please select a time slot.";
        }
        if (!formData.hasStartBusiness) {
            newErrors.hasStartBusiness = "Please select your experience level.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Validate age
    // const validateAge = (age, minAge, maxAge) => {
    //     let birthDate = new Date(age);
    //     let today = new Date();
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     let monthDiff = today.getMonth() - birthDate.getMonth();
    //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age >= minAge && age <= maxAge;
    // };

const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!validateForm()) return;

    setLoading(true);

    try{
        const docRef = await addDoc(collection(db, "tailoringForm"), {
            name: formData.name,
            gender: formData.gender,
            age: formData.age, 
            mobile: formData.mobile,
            timeSlot: formData.timeSlot,
            parentSpouseName: formData.parentSpouseName,
            hasStartBusiness: formData.hasStartBusiness, 
            hasExperience: formData.hasExperience, 
            education: formData.education, 
            occupation: formData.occupation, 
            address: formData.address 
        });

        if(docRef.id){
            setModalMessage('🎉 Registration successful! Our team will contact you soon.')
            setFormData({
                name: "",
                gender: "",
                age: "",
                mobile: "",
               
                timeSlot: "",
                parentSpouseName: "",
                hasStartBusiness: "",
                hasExperience: "",
                education: "",
                occupation: "",
                address: "",
            });
        }
    } catch (error) {
        setModalMessage("⚠️ Registration failed. Please try again later.");
        console.error("Error:", error);
    }

    setShowModal(true);
    setLoading(false);
}


    // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;

    //     setLoading(true);

    //     try {
    //         let response = await fetch(`${SUPABASE_URL}/rest/v1/software_registrations`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "apikey": SUPABASE_KEY,
    //                 "Authorization": `Bearer ${SUPABASE_KEY}`,
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         let result = await response.text();
    //         let jsonResult = result ? JSON.parse(result) : {};

    //         if (response.ok) {
    //             setModalMessage("🎉 Registration successful! Our team will contact you soon.");
    //             setFormData({
    //                 name: "",
    //                 gender: "",
    //                 age: "",
    //                 mobile: "",
    //                 alternateNumber: "",
    //                 email: "",
    //                 graduationYear: "",
    //                 experience: "",
    //                 timeSlot: "",
    //             });
    //         } else {
    //             setModalMessage("❌ Registration failed. Please try again.");
    //             console.error("Error:", jsonResult)
    //         }
    //     } catch (error) {
    //         setModalMessage("⚠️ Registration failed. Please try again later.");
    //         console.error("Error:", error);
    //     }

    //     setShowModal(true);
    //     setLoading(false);
    // };

    return (
        <div className="registerform">
            <div className="form-container">
                {/* Brand Header  */}
                <div className="brand-header">
                    <div className="brand-logo">
                        <img src="/images/AIWA_YELLOW_LOGO.png" alt="AIWA Logo" />
                    </div>
                    <div>
                        <div className="brand-text">Al INFAAQ WELFARE ASSOCIATION</div>
                        <div className="brand-description">Join our FREE tailoring course and master the latest sewing techniques while exploring exciting career opportunities in the fashion industry!</div>
                    </div>
                </div>

                <h6>Fill out the form below to enroll in our<span className="gradient-text"> Free Tailoring</span> course</h6>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        {/**Name */}
                        <Form.Label>{t("name")}  <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
                        <p className="text-danger">{errors.name}</p>
                    </Form.Group>

                    {/**Gender */}
                    <Form.Group>
                        <Form.Label>
                        {t("gender")} <span className="text-danger">*</span>
                        </Form.Label>
                       

                        {/* Male Option */}
                        <Form.Check
                            type="radio"
                            label={t("male")}
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                        />
                        {/**female option */}
                        <Form.Check
                            type="radio"
                            label={t("female")}
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                        />

                        <p className="text-danger">{errors.gender}</p>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>{t('age')} <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
                    <p className="text-danger">{errors.age}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('address')} <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
                    <p className="text-danger">{errors.address}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('mobile')}<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                    <p className="text-danger">{errors.mobile}</p>
                </Form.Group>
{/* 
                <Form.Group className="mb-3">
                    <Form.Label>Alternate Mobile Number (Optional)</Form.Label>
                    <Form.Control type="text" name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} />
                </Form.Group> */}

                <Form.Group className="mb-3">
                    <Form.Label>{t('education')}</Form.Label>
                    <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('occupation')}</Form.Label>
                    <Form.Control type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('timeSlot')} <span className="text-danger">*</span></Form.Label>
                    <Form.Check type="radio" label="10:00 - 11:00 AM" name="timeSlot" value="10-11 AM" onChange={handleChange} />
                    <Form.Check type="radio" label="11:00 - 12:00 PM" name="timeSlot" value="11-12 PM" onChange={handleChange} />
                    <Form.Check type="radio" label="12:00 - 1:00 PM" name="timeSlot" value="12-1 PM" onChange={handleChange} />
                    <Form.Check type="radio" label="3:00 - 4:00 PM" name="timeSlot" value="3-4 PM" onChange={handleChange} />
                    <Form.Check type="radio" label="4:00 - 5:00 PM" name="timeSlot" value="4-5 PM" onChange={handleChange} />
                    <Form.Check type="radio" label="5:00 - 6:00 PM" name="timeSlot" value="5-6 PM" onChange={handleChange} />
                 
                    <p className="text-danger">{errors.timeSlot}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('parentSpouseName')} <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="parentSpouseName" value={formData.parentSpouseName} onChange={handleChange} />
                    <p className="text-danger">{errors.parentSpouseName}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('tailoringreason')}:<br/> {t('hasStartBusiness')}</Form.Label>
                    <Form.Check type="radio" name="hasStartBusiness" label={t('yes')} value="Yes" checked={formData.hasStartBusiness === "Yes"} onChange={handleChange} />
                    <Form.Check type="radio" name="hasStartBusiness" label="No" value="No" checked={formData.hasStartBusiness === "No"} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>{t('hasExperienceTailor')}<span className="text-danger">*</span></Form.Label>
                    <Form.Check type="radio" name="hasExperience" label={t('yes')} value="Yes" checked={formData.hasExperience === "Yes"} onChange={handleChange} />
                    <Form.Check type="radio" name="hasExperience" label="No" value="No" checked={formData.hasExperience === "No"} onChange={handleChange} />
                    <p className="text-danger">{errors.hasExperience}</p>
                </Form.Group>
                    {loading && (
                        <div style={{ textAlign: "center", marginTop: "10px" }}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Processing...</span>
                            </div>
                            <p>Please wait...</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button type="submit" className="btn-submit mt-4" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
                    </Button>

                    {/* Privacy Notice */}
                    <p className="mt-3 privacy-text">
                        I authorize AL INFAAQ Welfare Association to contact me with course updates via Email/SMS/WhatsApp/Call.
                    </p>


                </Form>
                {/* Modal for Alerts */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Notification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalMessage}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShowModal(false)}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}
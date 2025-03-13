import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";

export default function SoftwareForm() {
    const SUPABASE_URL = "https://luetuvysehnhaxaaacnh.supabase.co";  // Replace with your Supabase URL
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZXR1dnlzZWhuaGF4YWFhY25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NzA1NzQsImV4cCI6MjA1NzA0NjU3NH0.VbwnKgmVnaeiao6GbnONf4wcIC7DYDe00ASN4h_V-bM";  // Replace with your Supabase Key

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dateOfBirth: '',
        mobile: '',
        alternateNumber: '',
        email: '',
        graduationYear: '',
        experience: '',
        timeSlot: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('')
    const [graduationYears, setGraduationYears] = useState([]);

    useEffect(() => {
        // Generate graduation years dynamically (from current year to 2003)
        const currentYear = new Date().getFullYear();
        let years = [];
        for (let year = currentYear; year >= 2003; year--) {
            years.push(year);
        }
        setGraduationYears(years);
    }, []);

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
        if (!formData.dateOfBirth || !validateAge(formData.dateOfBirth, 16, 35)) {
            newErrors.dateOfBirth = "Age must be between 16 and 35 years.";
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
        if (formData.alternateNumber && !/^\d{10}$/.test(formData.alternateNumber)) {
            newErrors.alternateNumber = "Enter a valid 10-digit mobile number.";
        }
        if (formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.graduationYear) {
            newErrors.graduationYear = "Select your graduation year.";
        }
        if (!formData.experience) {
            newErrors.experience = "Please select your experience level.";
        }
        if (!formData.timeSlot) {
            newErrors.timeSlot = "Please select a time slot.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Validate age
    const validateAge = (dateOfBirth, minAge, maxAge) => {
        let birthDate = new Date(dateOfBirth);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= minAge && age <= maxAge;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            let response = await fetch(`${SUPABASE_URL}/rest/v1/software_registrations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                },
                body: JSON.stringify(formData),
            });

            let result = await response.text();
            let jsonResult = result ? JSON.parse(result) : {};

            if (response.ok) {
                setModalMessage("🎉 Registration successful! Our team will contact you soon.");
                setFormData({
                    name: "",
                    gender: "",
                    dateOfBirth: "",
                    mobile: "",
                    alternateNumber: "",
                    email: "",
                    graduationYear: "",
                    experience: "",
                    timeSlot: "",
                });
            } else {
                setModalMessage("❌ Registration failed. Please try again.");
                console.error("Error:", jsonResult)
            }
        } catch (error) {
            setModalMessage("⚠️ Registration failed. Please try again later.");
            console.error("Error:", error);
        }

        setShowModal(true);
        setLoading(false);
    };

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
                        <div className="brand-description">Join our FREE course and learn the about the latest technologies required for Full Stack web development and explore the career opportunities in Software development.</div>
                    </div>
                </div>

                <h6>Fill out the form below to enroll in our<span className="gradient-text"> Free Full Stack Web Development</span> course</h6>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        {/**Name */}
                        <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
                        <p className="text-danger">{errors.name}</p>
                    </Form.Group>

                    {/**Gender */}
                    <Form.Group>
                        <Form.Label>
                            Gender <span className="text-danger">*</span>
                        </Form.Label>
                        <p className="gender-note">
                            Currently not available for female students. For details,{" "}
                            <a href="tel:+919585434368" className="contact-link">
                                Contact us
                            </a>
                        </p>

                        {/* Male Option */}
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                        />
                        {/**female option */}
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="Female"
                            disabled
                        />

                        <p className="text-danger">{errors.gender}</p>
                    </Form.Group>

                    {/* dateOfBirth */}
                    <Form.Group className="mb-3">
                        <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                        <p className="text-danger">{errors.dateOfBirth}</p>
                    </Form.Group>

                    {/* Mobile */}
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number (WhatsApp) <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        <p className="text-danger">{errors.mobile}</p>
                    </Form.Group>

                    {/*Alternative Mobile (optional)*/}
                    <Form.Group className="mb-3">
                        <Form.Label>Alternate Mobile Number</Form.Label>
                        <Form.Control type="text" name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} />
                        <p className="text-danger">{errors.alternateNumber}</p>
                    </Form.Group>

                    {/* Email Field (optional)*/}
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                        <p className="text-danger">{errors.email}</p>
                    </Form.Group>

                    {/* Experience */}
                    <Form.Group className="mb-3">
                        <Form.Label>Experience <span className="text-danger">*</span></Form.Label>
                        <Form.Check type="radio" name="experience" label="Working professional - IT" value="workingit" checked={formData.experience === "workingit"} onChange={handleChange}/>
                        <Form.Check type="radio" name="experience" label="Working professional - Non-IT" value="workingnonit" checked={formData.experience === "workingnonit"} onChange={handleChange}/>
                        <Form.Check type="radio" name="experience" label="College student - Final year" value="finalyear" checked={formData.experience === "finalyear"} onChange={handleChange}/>
                        <Form.Check type="radio" name="experience" label="College student - 1st to pre-final year" value="prefinalyear"  checked={formData.experience === "prefinalyear"} onChange={handleChange}/>
                        <Form.Check type="radio" name="experience" label="Others" value="others" checked={formData.experience === "others"} onChange={handleChange}/>
                        <p className="text-danger">{errors.experience}</p>
                    </Form.Group>

                    {/* Graduation Year Field */}
                    <Form.Group className="mb-3">
                        <Form.Label>Graduation Year <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleChange}
                        >
                            <option value="">Select Graduation Year</option>
                            <option value="Not Applicable">Not Applicable</option>
                            {graduationYears.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </Form.Select>
                        <p className="text-danger">{errors.graduationYear}</p>
                    </Form.Group>

                    {/* Time Slot Field */}
                    <Form.Group className="mb-3">
                        <Form.Label>Time Slot <span className="text-danger">*</span></Form.Label>
                        <Form.Check
                            type="radio"
                            label="7:00 - 8:00 PM (Not Available)"
                            name="timeSlot"
                            value="7-8 PM"
                            disabled
                        />
                        <Form.Check
                            type="radio"
                            label="9:00 - 10:00 PM"
                            name="timeSlot"
                            value="9-10 PM"
                            checked={formData.timeSlot === "9-10 PM"}
                            onChange={handleChange}
                        />
                        <p className="text-danger">{errors.timeSlot}</p>
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
                <div class="footer-credit">
        Created by <a href="https://astasystech.com" target="_blank" class="gradient-text">Asta Systech</a>
    </div>
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
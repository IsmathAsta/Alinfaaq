import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarComponent() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div
  style={{ backgroundImage: 'linear-gradient(to right, #e69d00 ,  #f1c152)' }}
  className="text-black py-2"
>
  <div className="container d-flex flex-wrap justify-content-between align-items-center">
    
    {/* Left: Social Icons & Language */}
    <div className="d-flex align-items-center gap-4 flex-wrap">
      <i className="fa-brands fa-square-facebook icons-size" style={{ fontSize: '25px' }}></i>
      <i className="fa-brands fa-square-instagram icons-size" style={{ fontSize: '25px' }}></i>
      <i className="fa-brands fa-square-twitter icons-size" style={{ fontSize: '25px' }}></i>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="form-select form-select-sm"
        style={{ width: '100px' }}
      >
        <option value="ta">தமிழ்</option>
        <option value="en">English</option>
      </select>
    </div>

    {/* Center: Arabic Text */}
    <div className="text-center flex-grow-1 d-none d-lg-block">
      <h6 className="m-0" style={{ fontSize: '16px' }}>
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h6>
    </div>

    {/* Right: WhatsApp */}
    <div className="d-flex align-items-center gap-2">
      <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
      <span className="fw-semibold" style={{ fontSize: '15px' }}>+91-8220347600</span>
    </div>

  </div>
</div>

      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" className="shadow">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src="images/AIWA_YELLOW_LOGO.png" alt="logo" style={{ width: '18vh', marginRight: '10px' }} />

            </Navbar.Brand>

            {/* Toggler Button */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold gap-2 flex-column flex-lg-row text-center">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === '/' ? 'fw-bold' : ''}
                style={{ color: location.pathname === '/' ? '#E69D00' : 'inherit' }}
              >
             Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/aboutus"
                className={location.pathname === '/aboutus' ? 'fw-bold' : ''}
                style={{ color: location.pathname === '/aboutus' ? '#E69D00' : 'inherit' }}
              >
                About us
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/services"
                className={location.pathname === '/services' ? 'fw-bold' : ''}
                style={{ color: location.pathname === '/services' ? '#E69D00' : 'inherit' }}
              >
                Services
              </Nav.Link>

              {/* Our Courses Dropdown */}
              <NavDropdown title="Our Courses" id="courses-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/tailoringDetail"
                  style={{ color: location.pathname === '/tailoringDetail' ? '#E69D00' : 'inherit' }}
                >
                  Sewing Training
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/softwareDetail"
                  style={{ color: location.pathname === '/softwareDetail' ? '#E69D00' : 'inherit' }}
                >
                  Software Course
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/tajweed"
                  style={{ color: location.pathname === '/tajweed' ? '#E69D00' : 'inherit' }}
                >
                  Embroidery & Aari Work Training
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/contactus"
                className={location.pathname === '/contactus' ? 'fw-bold' : ''}
                style={{ color: location.pathname === '/contactus' ? '#E69D00' : 'inherit' }}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

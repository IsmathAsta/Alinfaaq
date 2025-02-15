import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarComponent() {
  const location = useLocation();

  return (
    <>
      {/* Top Contact Bar */}
      <div
        style={{ backgroundImage: 'linear-gradient(to right, #e69d00 ,  #f1c152)' }}
        className="text-white py-2 d-none d-lg-block"
      >
        <div className="container d-flex justify-content-between">
          <div>
            <i className="fa-solid fa-location-dot ms-3"></i> 4A, South Mohideen Pallivasal Street, Mpm, Tvl
          </div>
          <div>
            <h5>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h5>
          </div>
          <div>
            <i className="fa-brands fa-whatsapp"></i> +91-9585434368 / +91-8220347600
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" className="shadow">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src="images/logos.jpg" alt="logo" style={{ width: '100px', height: '50px', marginRight: '10px' }} />
              <h5 className="mb-0 d-none d-sm-block" style={{ color: '#ffce05' }}>Al-Infaaq Welfare Association</h5>
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
                to="/whyreadnlearn"
                className={location.pathname === '/whyreadnlearn' ? 'fw-bold' : ''}
                style={{ color: location.pathname === '/whyreadnlearn' ? '#E69D00' : 'inherit' }}
              >
                Services
              </Nav.Link>

              {/* Our Courses Dropdown */}
              <NavDropdown title="Our Courses" id="courses-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/quran"
                  style={{ color: location.pathname === '/quran' ? '#E69D00' : 'inherit' }}
                >
                  Sewing Training
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/arabic"
                  style={{ color: location.pathname === '/arabic' ? '#E69D00' : 'inherit' }}
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

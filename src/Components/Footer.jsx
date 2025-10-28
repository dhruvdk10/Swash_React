import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-100 pt-5" style={{ backgroundColor: "#ddd" }}>
      <div className="container">
        <div className="row g-4 text-center justify-content-center mx-0">
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">CALL US</h6>
            <p className="mb-1">+91 xxxxxxx</p>
            <p>+91 xxxxxxxxx</p>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">VISIT US</h6>
            <p className="mb-0">123, xx,</p>
            <p className="mb-0">xx, xx</p>
            <p className="mb-0">New Delhi, India</p>
          </div>
          <div className="col-6 col-md-3 text-md-start text-center">
            <a href="mds.html">
              <img src="mds_logo_hd.png" alt="Logo" className="logo mb-3" style={{ height: "50px", width: "50px", objectFit: "cover", cursor: "pointer", margin: "auto" }} />
            </a>
            <div className="social-icons">
              <div className="footer-links d-flex justify-content-center gap-4 fs-5">
                <a
                  href="https://www.facebook.com/Manchitra.studio"
                  className="fs-4 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/manchitra.studio/?hl=en"
                  className="fs-4 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="mailto:manchitradesignstudio@gmail.com"
                  className="fs-4 text-dark"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://wa.me/918800844329"
                  className="fs-4 text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" style={{ width: "100%", margin: "auto", height: "0.5px", color: "#333" }} />
      <div className="footer-bottom text-muted py-3" style={{ textAlign: "center" }}>
        <span>&copy; 2025 Swash Jwellers. All rights reserved.<br />Made with love by Sweta</span>
      </div>
    </footer>
  );
};

export default Footer;


import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main align-items-center">
          <Col size={12} lg={4} className="text-center text-lg-start">
            <img className="footer-logo" src={logo} alt="Logo Farrel" />
            <p className="footer-tagline">
              Jasa pembuatan website, web apps &amp; aplikasi yang cepat,
              responsif, dan terpercaya.
            </p>
          </Col>
          <Col
            size={12}
            lg={4}
            className="footer-links-wrap text-center text-lg-start"
          >
            <h5>Menu</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#paket">Paket</a>
              </li>
              <li>
                <a href="#contact">Order</a>
              </li>
            </ul>
          </Col>
          <Col
            size={12}
            lg={4}
            className="text-center text-lg-end footer-social-col"
          >
            <h5>Ikuti Saya</h5>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/muhammadfarrelpradipta/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Ar-Study" aria-label="GitHub">
                <img src={navIcon4} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/muhammadfarrelpradipta?igsh=NW9rZDdtNWt0eGhm"
                aria-label="Instagram"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center">
          <p>Copyright {year}. Muhammad Farrel Pradipta. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
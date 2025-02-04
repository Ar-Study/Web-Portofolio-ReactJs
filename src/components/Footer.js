import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useEffect } from "react";

export const Footer = () => {
  // useEffect(() => {
  //   // Cek apakah script sudah ada untuk mencegah duplikasi
  //   if (!document.getElementById("tawkto-script")) {
  //     var s1 = document.createElement("script");
  //     s1.async = true;
  //     s1.src = "https://embed.tawk.to/67a219ca825083258e0feab5/1ij8j9g72";
  //     s1.charset = "UTF-8";
  //     s1.setAttribute("crossorigin", "*");
  //     s1.id = "tawkto-script";
  //     document.body.appendChild(s1);
  //   }
  // }, []);

  useEffect(() => {
    // Cek apakah script sudah dimuat untuk mencegah duplikasi
    if (!document.getElementById("tawkto-script")) {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/67a2943d825083258e1012c7/1ij9h64tp";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s1.id = "tawkto-script";
      document.body.appendChild(s1);
    }
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammadfarrelpradipta/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Ar-Study">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.instagram.com/muhammadfarrelpradipta?igsh=NW9rZDdtNWt0eGhm">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

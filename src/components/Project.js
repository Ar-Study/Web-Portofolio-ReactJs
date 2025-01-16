import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "E-Learning Using PWA",
      description: "MERN Stack",
      imgUrl: projImg5,
      link: "https://web-pembelajaran-mern-pwa-uluw.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description: "React & Firebase",
      imgUrl: projImg6,
      link: "https://netflix-clone-1489d.web.app/",
    },
    {
      title: "Sistem Penerimaan Beasiswa Menggunakan AHP",
      description: "PHP & MySQL",
      imgUrl: projImg7,
      link: "https://github.com/Ar-Study/SistemPendukungKeputusan_BeasiswaLuarNegeri_Ver2.0",
    },
    {
      title: "Point Of Sales Kasir Toko Buku",
      description: "CodeIgniter 4 & MySQL",
      imgUrl: projImg8,
      link: "https://smartinventory.umppress.com/",
    },
    {
      title: "Profile Toko Buku",
      description: "Wordpress Plugin",
      imgUrl: projImg9,
      link: "https://umppress.com/",
    },
    {
      title: "Personal Portofolio",
      description: "NodeJS & React",
      imgUrl: projImg10,
      link: "https://web-portofolio-react-js.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have successfully completed projects such as developing an
                    online training platform using the MERN stack with
                    client-side data backup and building a dynamic business
                    profile website for TehAja using CodeIgniter and MySQL.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web and Web App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI/UX Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

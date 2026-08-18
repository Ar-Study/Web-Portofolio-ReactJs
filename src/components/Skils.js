import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CodeSlash, Gear, Brush, Wrench } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";

const skillCategories = [
  {
    title: "Front-End",
    Icon: CodeSlash,
    skills: [
      "HTML & CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Vue.js",
      "Bootstrap & Tailwind",
      "Responsive Design",
    ],
  },
  {
    title: "Back-End",
    Icon: Gear,
    skills: [
      "PHP",
      "Node.js & Express.js",
      "CodeIgniter 4",
      "MySQL",
      "REST API",
      "Firebase",
    ],
  },
  {
    title: "UI/UX Design",
    Icon: Brush,
    skills: [
      "Figma",
      "Wireframe & Prototype",
      "Design System",
      "User Research",
      "Mobile-First Design",
    ],
  },
  {
    title: "Tools & Lainnya",
    Icon: Wrench,
    skills: [
      "Git & GitHub",
      "JIRA & Trello",
      "WordPress",
      "PWA",
      "Graphic Design",
      "Project Management",
    ],
  },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const meterItems = [
    { img: meter1, label: "Front-End Development" },
    { img: meter2, label: "Back-End Development" },
    { img: meter3, label: "UI/UX Design" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Kombinasi kemampuan front-end, back-end, dan desain UI/UX untuk
                membangun website &amp; aplikasi yang modern, cepat, dan
                menarik. Berpengalaman menggunakan berbagai teknologi populer
                serta tools manajemen project profesional.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {meterItems.map((item, i) => (
                  <div className="item" key={i}>
                    <img src={item.img} alt={item.label} />
                    <h5>{item.label}</h5>
                  </div>
                ))}
              </Carousel>
              <div className="skill-grid">
                {skillCategories.map((cat, i) => (
                  <div className="skill-card" key={i}>
                    <h5 className="skill-card-title">
                      <span className="skill-icon">
                        <cat.Icon size={18} />
                      </span>{" "}
                      {cat.title}
                    </h5>
                    <ul className="skill-tags">
                      {cat.skills.map((s, j) => (
                        <li key={j}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
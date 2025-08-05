import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import biopay from "../../Assets/Projects/biopay.png";
import CFB from "../../Assets/Projects/CFB.png";
import TechMasters from "../../Assets/Projects/Tech-Masters.png";
import Instant from "../../Assets/Projects/Instant.png";
import JoeDealAgent from "../../Assets/Projects/Joe-Deal-Agent.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CFB}
              isBlog={false}
              title="Code-For-Bharat"
              description="A hackathon website made using Next.js and Tailwind-CSS got over 10k+ registrations and hosted on .xyz domain (Organized by Me 😉)"
              ghLink="https://github.com/advay77/Code-For-Bharat"
              demoLink="https://www.codeforbharat.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biopay}
              isBlog={false}
              title="Bio-Pay"
              description="A biometric payment system that uses palm recognition to authenticate users and process transactions. It ensures secure and convenient payments by eliminating the need for physical cards or cash."
              ghLink="https://github.com/advay77/bio-pay-connect"
              demoLink="https://bio-pay-connect.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechMasters}
              isBlog={false}
              title="Tech-Masters"
              description="A platform for tech enthusiasts to connect, share knowledge, and collaborate on projects.My community which conducts hackathons and events to foster innovation and learning in the tech space. Conducted 3+ national level hackathons with over 10k+ registrations."
              ghLink="https://github.com/advay77/techmasters"
              demoLink="https://techmasters-rouge.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Instant}
              isBlog={false}
              title="Instant-Care"
              description="A healthcare platform that connects patients with doctors for instant consultations. It provides a seamless experience for booking appointments, accessing medical advice, and managing health records through ayurveda and allopathy." 
              ghLink="https://github.com/advay77/Instant-Care"
              demoLink="https://instant-care-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JoeDealAgent}
              isBlog={false}
              title="Joe-Deal-Agent"
              description="A personal AI agent that helps users find the best deals on products and services. It uses advanced algorithms to analyze user preferences." 
              ghLink="https://github.com/advay77/JOE-DEAL-AGENT-"
              demoLink="https://joe-deal-agent.vercel.app/"
            />
          </Col>
          
           
          
          




          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onecart from "../../Assets/Projects/onecart.png";
import interviewiq from "../../Assets/Projects/interviewiq.png";
import chatpata from "../../Assets/Projects/chatpata.png";
import handwriting from "../../Assets/Projects/handwriting.png";

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
              imgPath={onecart}
              isBlog={false}
              title="OneCart"
              description="OneCart – AI-powered full-stack eCommerce web app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include secure user authentication, smart AI-based product search, cart and checkout system, order history, and an admin dashboard for managing users, products, and orders."
              ghLink="https://github.com/proswarnali24/OneCart"
              demoLink="https://onecart-frontendonecart.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interviewiq}
              isBlog={false}
              title="InterviewIQ"
              description="Built InterviewIQ, a full-stack AI-powered mock interview platform using React, Vite, Node.js, Express, and MongoDB, featuring resume-based question generation, timed interview sessions, performance reports, authentication, and credit-based payment integration."
              ghLink="https://github.com/proswarnali24/InterviewIQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpata}
              isBlog={false}
              title="ChatPata"
              description="Built ChatPata, a real-time full-stack chat application using Node.js, Express, Socket.IO, MongoDB, and JWT authentication. Implemented group and private messaging, image sharing, user login/register, online user tracking, and AI-assisted moderation with Gemini integration."
              ghLink="https://github.com/proswarnali24/ChatPata"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwriting}
              isBlog={false}
              title="Handwriting Recognizer"
              description="Built a deep learning-based digit recognition system using CNNs in PyTorch for the MNIST and SVHN datasets, achieving 98.94% accuracy on MNIST and 88.84% on SVHN. Designed end-to-end training, hyperparameter tuning, evaluation, confusion matrix visualization, and cross-dataset generalization analysis in Jupyter Notebook using PyTorch, scikit-learn, NumPy, and Matplotlib."
              ghLink="https://github.com/proswarnali24/HandWritting_Recognizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

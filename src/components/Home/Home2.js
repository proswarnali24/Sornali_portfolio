import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../Assets/my img.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A passionate Computer Science Engineering student at Jadavpur University with a strong
              foundation in full-stack web development and AI-powered applications. Currently pursuing
              my B.Tech (2023-2027) with a CGPA of 7.2, I'm actively building projects and solving
              coding challenges to enhance my technical skills.
              <br />
              <br />I have good hands-on practice in programming languages like
              <i>
                <b className="purple"> C++, Java, Python, JavaScript</b>
                <br />
              </i>
                and have a strong understanding of modern web technologies like
              <i>
                <b className="purple"> React.js, Node.js, Express.js, MongoDB </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">AI/ML applications</b>
              </i>
              <br />
              <br />
              I have solved 250+ coding problems on platforms like LeetCode and GeeksforGeeks, and I'm
              currently working on AI-powered projects including a career guidance platform shortlisted
              for Smart India Hackathon (SIH) 2025.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img} style={{borderRadius: "10px"}} className="img-fluid w-50 " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/proswarnali24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/sen_sornali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sornali-sen-a90b61313/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swarnali.sen.24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sornali Sen </span>
            from <span className="purple"> Kolkata, West Bengal, India.</span>
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science Engineering</span> at <span className="purple">Jadavpur University</span> (2023-2027).
            <br />
            I have a CGPA of 7.2 and I'm passionate about full-stack web development and AI-powered applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving on LeetCode
            </li>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered Applications
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "I believe that I can make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Sornali Sen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

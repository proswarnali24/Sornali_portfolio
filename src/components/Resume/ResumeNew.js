import React, { useState, useEffect } from "react";
import { Container, Row, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import fullstackPdf from "../../Assets/FullStack-Resume.pdf";
import mlPdf from "../../Assets/ML-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [resumeType, setResumeType] = useState("fullstack");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const activePdf = resumeType === "fullstack" ? fullstackPdf : mlPdf;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <ButtonGroup style={{ maxWidth: "500px" }}>
            <Button
              variant={resumeType === "fullstack" ? "primary" : "outline-primary"}
              onClick={() => setResumeType("fullstack")}
            >
              Full-Stack Resume
            </Button>
            <Button
              variant={resumeType === "ml" ? "primary" : "outline-primary"}
              onClick={() => setResumeType("ml")}
            >
              Machine Learning Resume
            </Button>
          </ButtonGroup>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={activePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={activePdf} key={resumeType} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={activePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;


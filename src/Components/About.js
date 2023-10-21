import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { RiQuestionFill, RiLandscapeFill, RiEye2Fill, RiFilePaper2Fill, RiBriefcase2Fill, RiUser2Fill } from "react-icons/ri";
import "./About.css";
import AboutData from "./AboutData";
import BackgroundData from "./BackgroundData";
import VisionData from "./VisionData";
import MissionData from "./MissionData";
import ObjectiveData from "./ObjectiveData"
import Topbar from "./Topbar";

function About() {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Topbar />
      <div className="about-container">
        <Container>
          <h1 data-aos="fade-up">
            <RiLandscapeFill /> Background
          </h1>
          <Row>
            <Col>
              <h1 data-aos="fade-up"><RiUser2Fill />My name is Siphamandla Whati</h1>
              <ListGroup variant="flush">
                {BackgroundData.map((about, index) => (
                  <ListGroup.Item key={index} data-aos="fade-up">{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-container">
        <Container>
          <h1 data-aos="fade-up">
            <RiEye2Fill /> Vision
          </h1>
          <Row>
            <Col>
              <ListGroup variant="flush">
                {VisionData.map((about, index) => (
                  <ListGroup.Item key={index} data-aos="fade-up">{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-container">
        <Container>
          <h1 data-aos="fade-up">
            <RiBriefcase2Fill /> Mission
          </h1>
          <Row>
            <Col>
              <ListGroup variant="flush">
                {MissionData.map((about, index) => (
                  <ListGroup.Item key={index} data-aos="fade-up">{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-container">
        <Container>
          <h1 data-aos="fade-up">
            <RiFilePaper2Fill /> Objectives
          </h1>
          <Row>
            <Col>
              <ListGroup variant="flush">
                {ObjectiveData.map((about, index) => (
                  <ListGroup.Item key={index} data-aos="fade-up">{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;

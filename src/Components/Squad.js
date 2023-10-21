import React from "react";
import "aos/dist/aos.css";
import Topbar from "./Topbar";
import "./Squad.css";
import { Container } from "react-bootstrap";
import { BsPeopleFill } from "react-icons/bs";

function Squad() {

  return (
    <>
      <Topbar />
      <div className="squad-container">
        <Container>
          <h1 data-aos="fade-right">
            <BsPeopleFill size={40} /> Events
          </h1>
          <h2 data-aos="fade-up">No upcoming events at the moment</h2>
        </Container>
      </div>
    </>
  );
}

export default Squad;

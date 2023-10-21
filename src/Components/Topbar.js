import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { FaTrophy, FaPhone, FaNewspaper } from "react-icons/fa";
import { RiBookMarkFill, RiQuestionFill, RiPhoneLine } from "react-icons/ri";
import { LiaFacebookF, LiaEnvelope, LiaWhatsapp } from "react-icons/lia";
import liverpool_logo from "./images/Ekhaya.png";
import "./Topbar.css";

function Topbar() {
  return (
    <Navbar collapseOnSelect expand="md" className="topbar">
      <Container>
        <Link to="/" className="topbar-brand">
          <Navbar.Brand href="#home">
            <img
              src={liverpool_logo}
              alt="logo of liverpool"
              id="liverpool-logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="navbar-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/about" className="topbar-item">
              <Nav.Link href="#about">
                <span>
                  <RiQuestionFill size={23} /> ABOUT
                </span>
              </Nav.Link>
            </Link>
            <Link to="/history" className="topbar-item">
              <Nav.Link href="#history">
                <span>
                  <RiBookMarkFill size={20} /> SHOWCASE
                </span>
              </Nav.Link>
            </Link>
            {/* <Link to="/titles" className="topbar-item">
              <Nav.Link href="#titles">
                <span>
                  <FaNewspaper size={20} /> NEWS
                </span>
              </Nav.Link>
            </Link> */}
            <Link to="/squad" className="topbar-item">
              <Nav.Link href="#squad">
                <span>
                  <BsPeopleFill size={20} /> EVENTS
                </span>
              </Nav.Link>
            </Link>
          </Nav>

          <div className="social-list">
            <Nav.Link href="tel:+27737029653" title="0737029653" target="_blank">
              <span>
                <RiPhoneLine size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link href="mailTo:Ekhaya36sporttournament@gmail.com" title="Email to Ekhaya36sporttournament@gmail.com" target="_blank">
              <span>
                <LiaEnvelope size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link href="https://api.whatsapp.com/send?phone=27737029653" title="WhatsApp" target="_blank">
              <span>
                <LiaWhatsapp size={35} className="social-icons" />
              </span>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/Ekhaya36-Tournament-106666114661489/" title="Facebook" target="_blank">
              <span>
                <LiaFacebookF size={35} className="social-icons" />
              </span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;

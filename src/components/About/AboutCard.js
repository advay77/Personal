import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Advay Anand </span>
            from <span className="purple"> Prayagraj, India.</span>
            <br />
            I am currently employed as a Web Dev intern in Zero Day Arena.
            <br />
            I am pursuing Bachelor of Technology in Computer Science (B.tech)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Organising events
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Frustration makes you a better coder 😉🫱🏻‍🫲🏻 "{" "}
          </p>
          <footer className="blockquote-footer">Advay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

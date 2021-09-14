import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Y (Y Sac) </span>
            from <span className="purple"> Da Nang, Viet Nam.</span>
            <br />I am a junior Frontend developer at Sun* Asterisk.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch TV Football
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Life is not fair, get used to it!"{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

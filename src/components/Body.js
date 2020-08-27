import React, { useRef, useEffect } from "react";
import "./Body.css";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Banner from "../assets/undraw_duplicate_xac4.svg";
import { TweenMax, Power3 } from "gsap";

function Body() {
  let name = useRef(null);
  let bodyContent = useRef(null);
  let connect1 = useRef(null);
  let connect2 = useRef(null);
  let connect3 = useRef(null);
  let connect4 = useRef(null);
  let connect5 = useRef(null);
  let connect6 = useRef(null);
  let connect7 = useRef(null);
  let button = useRef(null);
  let right = useRef(null);

  useEffect(() => {
    if (name === null) {
    } else {
      setTimeout(() => {
        TweenMax.staggerFrom(
          [
            name,
            bodyContent,
            connect1,
            connect2,
            connect3,
            connect4,
            connect5,
            connect6,
            connect7,
            button,
            right,
          ],
          1,
          { opacity: 0.1, y: 50, ease: Power3.easeInOut },
          0.3
        );
      }, 1000);
    }
  }, [name]);

  return (
    <div className="body">
      <div className="left">
        <div ref={(el) => (name = el)} className="body_header">
          <h1>
            Hello
            <span role="img" aria-label="hello" className="animate">
              👋
            </span>
            I am Subham
          </h1>
        </div>
        <div ref={(el) => (bodyContent = el)} className="body_content">
          <h3>
            I am Web Developer{" "}
            <span role="img" aria-label="Developer">
              💻
            </span>{" "}
            And Artist{" "}
            <span role="img" aria-label="Developer">
              🖌
            </span>{" "}
            | React JS | React Native | Laravel
          </h3>
          <h3>
            Curious
            <span role="img" aria-label="Curious">
              🤔
            </span>
            | Artist
            <span role="img" aria-label="Passionate">
              🔥
            </span>
            | Learner
            <span role="img" aria-label="Learner">
              📘
            </span>
          </h3>
        </div>
        <div className="connect">
          <a
            ref={(el) => (connect1 = el)}
            href="https://github.com/subhampanja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon github">
              <GitHubIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect2 = el)}
            href="https://www.linkedin.com/in/subham-panja-822571181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon linkedIn">
              <LinkedInIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect3 = el)}
            href="mailto:subhampanja28@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon email">
              <EmailIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect4 = el)}
            href="https://twitter.com/@subhampanja9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon twitter">
              <TwitterIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect5 = el)}
            href="https://www.facebook.com/subham.panja.37"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon facebook">
              <FacebookIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect6 = el)}
            href="https://www.instagram.com/subham_panja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon instagram">
              <InstagramIcon />
            </Avatar>
          </a>
          <a
            ref={(el) => (connect7 = el)}
            href="https://wa.me/+919883250237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="connect_icon whatsapp">
              <WhatsAppIcon />
            </Avatar>
          </a>
        </div>
        <div ref={(el) => (button = el)} className="button">
          <a href="tel:+919883250237">
            <Button
              size="large"
              className="buttton_contact"
              variant="outlined"
              color="primary"
            >
              Contact Me
            </Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1tMFCQclexMpHUbiWQjqD5G5xA4jzM0-N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="large" variant="outlined" color="primary">
              Resume
            </Button>
          </a>
        </div>
      </div>
      <div ref={(el) => (right = el)} className="right">
        <div>
          <img className="right_banner" src={Banner} alt="banner_image" />
        </div>
      </div>
    </div>
  );
}

export default Body;

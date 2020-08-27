import React, { useEffect, useRef } from "react";
import "./Calendly.css";
import Container from "@material-ui/core/Container";
import calender from "../assets/calendar.png";
import { TweenMax, Power3 } from "gsap";

function Calendly() {
  let schedule = useRef(null);
  let calendly = useRef(null);

  useEffect(() => {
    if (calendly === null) {
    } else {
      setTimeout(() => {
        TweenMax.staggerFrom(
          [schedule, calendly],
          3,
          { opacity: 0.1, y: 50, ease: Power3.easeInOut },
          0.3
        );
      }, 2500);
    }
  }, [calendly]);

  return (
    <div className="calendly">
      <Container maxWidth="lg">
        <div ref={(el) => (schedule = el)} className="calendly_heading">
          <h1>
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            Schedule a call{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
          </h1>
        </div>
        <Container maxWidth="xs">
          <div ref={(el) => (calendly = el)} className="calendly_calender">
            {/* here make sure you paste your own calendly  */}
            <a
              href="https://calendly.com/subhampanja28/consulting-for-web-related-queries"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={calender} alt="calender" />
            </a>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Calendly;

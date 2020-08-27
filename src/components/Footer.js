import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { TweenMax, Power3 } from "gsap";

function Footer() {
  let madewith = useRef(null);
  let dev = useRef(null);

  useEffect(() => {
    if (madewith === null) {
    } else {
      setTimeout(() => {
        TweenMax.staggerFrom(
          [madewith, dev],
          3,
          { opacity: 0.1, y: 50, ease: Power3.easeInOut },
          0.3
        );
      }, 3000);
    }
  }, [madewith]);

  return (
    <div>
      <div ref={(el) => (madewith = el)} className="footer_name">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Subham Panja
        </p>
      </div>
      <div ref={(el) => (dev = el)} className="footer_dev">
        <p>
          Theme by{" "}
          <a
            href="https://github.com/subhampanja/smartportly.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            SmartPortly
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

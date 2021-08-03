import React, { useEffect, useRef } from "react";
import "./Skills.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import react from "../assets/react-brands.svg";
import brush from "../assets/paint-brush-solid.svg";
import node from "../assets/node-js-brands.svg";
import npm from "../assets/npm-brands.svg";
import db from "../assets/database-solid.svg";
import firebase from "../assets/fire-solid.svg";
import php from "../assets/php-brands.svg";
import laravel from "../assets/laravel-brands.svg";
import mongo from "../assets/mongodb.png";
import gatsby from "../assets/gatsby.png";
import next from "../assets/next-js.svg";
import { TweenMax, Power3 } from "gsap";

function Skills() {
  let skillsHeader = useRef(null);
  let skills1 = useRef(null);
  let skills2 = useRef(null);
  let skills3 = useRef(null);
  let skills4 = useRef(null);
  let skills5 = useRef(null);
  let skills6 = useRef(null);
  let skills7 = useRef(null);
  let skills8 = useRef(null);
  let skills9 = useRef(null);
  let skills10 = useRef(null);
  let skills11 = useRef(null);
  let skills12 = useRef(null);
  let ido1 = useRef(null);
  let ido2 = useRef(null);
  let ido3 = useRef(null);
  let ido4 = useRef(null);
  let ido5 = useRef(null);
  let ido6 = useRef(null);

  useEffect(() => {
    if (skillsHeader === null) {
    } else {
      setTimeout(() => {
        TweenMax.staggerFrom(
          [
            skillsHeader,
            skills1,
            skills2,
            skills3,
            skills4,
            skills5,
            skills6,
            skills7,
            skills8,
            skills9,
            skills10,
            skills11,
            skills12,
            ido1,
            ido2,
            ido3,
            ido4,
            ido5,
            ido6,
          ],
          1.5,
          { opacity: 0.1, y: 50, ease: Power3.easeInOut },
          0.3
        );
      }, 1000);
    }
  }, [skillsHeader]);
  return (
    <div className="skills">
      <Box
        ref={(el) => (skillsHeader = el)}
        display="flex"
        justifyContent="center"
      >
        <h1 className="skill_header">What Can I Do</h1>
      </Box>
      <div className="skills_list">
        <Container maxWidth="md">
          <div className="skills_three">
            <h1 ref={(el) => (skills1 = el)} className="skills_each">
              <img src={brush} alt="brush" className="avatar_icon" />{" "}{" "}
              <span> Art </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ★ </span>
            </h1>
            <h1 ref={(el) => (skills2 = el)} className="skills_each">
              <img src={react} alt="react" className="avatar_icon" />{" "}{" "}
              <span> React JS </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills3 = el)} className="skills_each">
              <img src={react} alt="react" className="avatar_icon" />{" "}{" "}
              <span> React Native </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ☆ ☆ </span>
            </h1>
          </div>
          <div className="skills_three">
            <h1 ref={(el) => (skills4 = el)} className="skills_each">
              <img src={node} alt="node" className="avatar_icon" />{" "}{" "}
              <span> Node JS </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills5 = el)} className="skills_each">
              <img src={npm} alt="npm" className="avatar_icon" />{" "}{" "}
              <span> npm </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills6 = el)} className="skills_each">
              <img src={gatsby} alt="gatsby" className="avatar_icon" />{" "}{" "}
              <span> Gatsby JS </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
          </div>
          <div className="skills_three">
            <h1 ref={(el) => (skills7 = el)} className="skills_each">
              <img src={next} alt="next" className="avatar_icon" />{" "}{" "}
              <span> Next JS </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills8 = el)} className="skills_each">
              <img src={mongo} alt="mongo" className="avatar_icon" />{" "}{" "}
              <span> Mongo DB </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills9 = el)} className="skills_each">
              <img src={firebase} alt="firebase" className="avatar_icon" />{" "}{" "}
              <span> Firebase </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
          </div>
          <div className="skills_three">
            <h1 ref={(el) => (skills10 = el)} className="skills_each">
              <img src={laravel} alt="laravel" className="avatar_icon" />{" "}{" "}
              <span> Laravel </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ☆ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills11 = el)} className="skills_each">
              <img src={php} alt="php" className="avatar_icon" />{" "}{" "}
              <span> PHP </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
            <h1 ref={(el) => (skills12 = el)} className="skills_each">
              <img src={db} alt="db" className="avatar_icon" />{" "}{" "}
              <span> SQL Database </span>{" "}{" "}
              <span className="skills_star"> ★ ★ ★ ★ ☆ </span>
            </h1>
          </div>
          <Container maxWidth="sm">
            <div className="skills_text">
              <p ref={(el) => (ido1 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                Development Front-End with React JS / Next JS / Gatsby JS (Web) and React Native(Mobile)
              </p>
              <p ref={(el) => (ido2 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                Development SPA(Single Page Application) & PWA(Progressive Web
                Application)
              </p>
              <p ref={(el) => (ido3 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                Development Back-End with Laravel / Node JS / Express JS
              </p>
              <p ref={(el) => (ido4 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                3rd Party API Integration | API Development
              </p>
              <p ref={(el) => (ido5 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                Deploy Firebase | AWS | VPS | Shared(Linux)
              </p>
              <p ref={(el) => (ido6 = el)}>
                <span role="img" aria-label="star">
                  ⚡
                </span>{" "}
                Application Penetration Testing{" "}
              </p>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Skills;

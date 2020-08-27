import React from "react";
import "./Project.css";
import Box from "@material-ui/core/Box";

function Project({ alldata }) {
  const openLink = (e) => {
    window.open(e);
  };

  return (
    <div className="project" onClick={() => openLink(alldata.html_url)}>
      <div className="project_each">
        <Box boxShadow={10} bgcolor="background.paper">
          <div className="project_header">
            <h1>
              <span role="img" aria-label="repo">
                📁
              </span>{" "}
              {alldata.name}
            </h1>
          </div>
          <div className="project_description">
            <h3>
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              {alldata.description}
            </h3>
          </div>
          <div className="project_last">
            <div>
              <p>
                <span role="img" aria-label="circle">
                  🟡
                </span>{" "}
                {alldata.language}{" "}
                <svg
                  className="octicon octicon-git-branch"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                  ></path>
                </svg>
                {alldata.forks_count}{" "}
                <svg
                  className="octicon octicon-star"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                {alldata.stargazers_count}
              </p>
            </div>
            <div>
              <p>{alldata.size} KB.</p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Project;

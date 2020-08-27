import React, { useState, useEffect } from "react";
import "./OpenSource.css";
import Project from "./Project";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const URL = "https://api.github.com/users/subhampanja/repos";

function OpenSource() {
  const [myRepoData, setMyRepoData] = useState([]);

  useEffect(() => {
    LoadRepo();
  }, []);

  const LoadRepo = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => setMyRepoData(data));
  };

  return (
    <div>
      <Container maxWidth="lg">
        <div className="opensource_header">
          <h1>My Open Source Project</h1>
        </div>
        <div className="opensource">
          {/* here you can change the slice accordingly you need.
            or you can wipe out it and it will show your entire repo */}
          {myRepoData.slice(0, 6).map((repo) => (
            <Project key={repo.id} alldata={repo} />
          ))}
        </div>
        <div className="opensource_button">
          {/* you have to change it to your git link */}
          <a
            href="https://github.com/subhampanja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined" size="large" color="primary">
              View All
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default OpenSource;

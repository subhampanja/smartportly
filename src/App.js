import React from "react";
import "./App.css";
import Main from "./components/Main";
import GitHubForkRibbon from 'react-github-fork-ribbon';

function App() {
  return (
    <div className="app">
      <GitHubForkRibbon
        color="green"
        position="left">
        New website coming
      </GitHubForkRibbon>
      <Main />
    </div>
  );
}

export default App;

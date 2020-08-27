import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Body from "./Body";
import Skills from "./Skills";
import OpenSource from "./OpenSource";
import Calendly from "./Calendly";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Body />
        <Skills />
        <OpenSource />
        <Calendly />
        <Footer />
      </Container>
    </div>
  );
}

export default Main;

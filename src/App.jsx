/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Communities from "./container/Communities/Communities";

const App = () => {



  useEffect(() => {
    if (window.location.pathname === "/meet") {
      window.location.href = "https://meet.google.com/bwr-rhma-exk";
    }
  }, []);


  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Communities />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;



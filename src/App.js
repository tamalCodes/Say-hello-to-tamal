/* eslint-disable quotes */
import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Communities from "./container/Communities/Communities";

const App = () => (
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

export default App;

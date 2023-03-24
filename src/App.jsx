/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect } from "react";

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./container";
import Meet from "./container/meet/Meet";

const App = () => (
  /*  */

  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<Meet />} />
      </Routes>

    </Router>
  </>
);

export default App;


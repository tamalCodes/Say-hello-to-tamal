/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect } from "react";


import "./App.scss";

import { Landing } from "./container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meet from "./container/meet/Meet";
import Resume from "./container/resume/Resume";


const App = () => {



  return (
    /*  */

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/meet" element={<Meet />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;



/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect } from "react";
import "./App.scss";

import { Landing } from "./container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meet from "./container/meet/Meet";
import Resume from "./container/resume/Resume";
import Linkedin from "./container/linkedin/Linkedin";
import Github from "./container/github/Github";
import Twitter from "./container/twitter/Twitter";
import Milan from "./container/milan/Milan";
import GoogleDrive from "./container/Drive/GoogleDrive";
import Notes from "./container/notes/Notes";

const App = () => {
  return (
    /*  */

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/meet" element={<Meet />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/github" element={<Github />} />
          <Route exact path="/linkedin" element={<Linkedin />} />
          <Route exact path="/twitter" element={<Twitter />} />
          <Route exact path="/milan" element={<Milan />} />
          <Route exact path="/drive" element={<GoogleDrive />} />
          <Route exact path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

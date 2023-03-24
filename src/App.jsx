/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useEffect } from "react";


import "./App.scss";

import { Landing } from "./container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meet from "./container/meet/Meet";


const App = () => {



  return (
    /*  */

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/meet" element={<Meet />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;



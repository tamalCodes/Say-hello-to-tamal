/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from "react";

const Prep = () => {
  document.title = "Tamal's Notes";
  useEffect(() => {
    if (window.location.pathname === "/prep") {
      setTimeout(() => {
        window.location.href =
          "https://github.com/tamalCodes/literally-learning";
      }, 500);
    }
  }, []);

  return (
    <>
      <div
        className="externalpage"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          justifyItems: "center",
          fontWeight: "600",
          fontFamily: "sans-serif",
          fontSize: "3rem",
          height: "100vh",
        }}
      >
        <p> Loading Tamal's Notes 🚀 </p>
      </div>
    </>
  );
};

export default Prep;

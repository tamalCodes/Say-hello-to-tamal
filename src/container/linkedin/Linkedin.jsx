import React, { useEffect } from "react";

const Linkedin = () => {
  document.title = "Tamal's LinkedIn";
  useEffect(() => {
    if (window.location.pathname === "/linkedin") {
      setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/tamalCodes/";
      }, 800);
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
        <p>
          {" "}
          Charging your <br /> professional batteries 🔋{" "}
        </p>
      </div>
    </>
  );
};

export default Linkedin;

import React, { useEffect } from "react";

const Notes = () => {
  document.title = "STUDY";
  useEffect(() => {
    if (window.location.pathname === "/notes") {
      setTimeout(() => {
        window.location.href =
          "https://tamals-note.notion.site/STUDY-6f5aece0db8841b09511e9db16b33b2d";
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
          May the force be <br />
          with you 🧿
        </p>
      </div>
    </>
  );
};

export default Notes;

/*  */

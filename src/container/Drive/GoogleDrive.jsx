import React, { useEffect } from "react";

const GoogleDrive = () => {
  document.title = "6TH SEM NOTES";
  useEffect(() => {
    if (window.location.pathname === "/drive") {
      setTimeout(() => {
        window.location.href =
          "https://drive.google.com/drive/folders/1cV466gbof4xuIjN21tzEIYNMf1w_UHUC?usp=share_link";
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
          9.0 OP
          <br />
          in the chat 🧿
        </p>
      </div>
    </>
  );
};

export default GoogleDrive;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  document.body.style.margin = "0";
  document.body.style.padding = "0";

  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>Technical Support</div>
        <div style={{ marginRight: "15px", marginLeft: "15px" }}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div>(+972)52330374</div>
      </div>
    </footer>
  );
};

export default Footer;

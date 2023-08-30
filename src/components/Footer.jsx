import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // Add a CSS rule to remove margin and padding from the body element
  document.body.style.margin = "0";
  document.body.style.padding = "0";

  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        position: "fixed", // Make the footer fixed
        bottom: 0, // Stick it to the bottom
        width: "100%", // Make the footer span the full width
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
        <div style={{ marginRight: "22px", marginLeft: "22px" }}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div>(+972)52330374</div>
      </div>
    </footer>
  );
};

export default Footer;

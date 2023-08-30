import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";

const ProductDetail = ({ products, onIconClick }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const handleIconClick = () => {
    onIconClick();
  };
  if (!product) {
    return <div>Product not found</div>;
  }

  // Style for the square container with a black frame
  const containerStyle = {
    backgroundColor: "#F9F5EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1000px", // Set the desired width for the square container
    height: "600px", // Set the desired height for the square container
    border: "2px solid #000", // Thin black frame
    borderRadius: "25px",
    position: "relative", // Add position relative to allow for the pseudo-element
  };

  // Style for the grid items to match the container size
  const gridItemStyle = {
    width: "100%", // Match the container's width
    height: "100%", // Match the container's height
    borderRadius: "25px",
  };

  // Style for the right side (product details) background color
  const rightSideStyle = {
    backgroundColor: "#F9F5EB", // Background color for the right side
    padding: "16px",
    borderRadius: "25px",
    // Rounded corners on the right side
    height: "100%", // Ensure the right side fills the entire height
  };

  // Style for key-value pairs
  const keyValueStyle = {
    fontWeight: "bold",
    margin: "0",
  };

  return (
    <div
      style={{
        backgroundColor: "#F9F5EB",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "black", marginRight: "10px" }}>
          <ArrowBackIcon onClick={handleIconClick} />
        </Link>

        <Link
          to={`/edit/${productId}`}
          style={{ color: "black", marginRight: "10px" }}
        >
          <EditIcon onClick={handleIconClick} />
        </Link>
        <Link to="/" style={{ color: "black", marginLeft: "10px" }}>
          <HomeIcon onClick={handleIconClick} />
        </Link>
      </div>
      <Typography variant="h3" align="center">
        Product Page
      </Typography>

      <div style={containerStyle}>
        <Grid container style={{ width: "100%", height: "100%" }}>
          {/* Image on the left */}
          <Grid item xs={6} style={gridItemStyle}>
            <div
              style={{
                height: "100%",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
              />
            </div>
          </Grid>
          {/* Product details on the right */}
          <Grid item xs={6} style={rightSideStyle}>
            <div
              style={{
                padding: "16px",
                height: "100%", // Ensure the right side fills the entire height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <p style={keyValueStyle}>Title:</p>
                <p>{product.title}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Description:</p>
                <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Category:</p>
                <p>{product.category}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Price:</p>
                <p>${product.price}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Quantity:</p>
                <p>{product.quantity}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetail;

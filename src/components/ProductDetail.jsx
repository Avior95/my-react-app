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

  const containerStyle = {
    backgroundColor: "#F9F5EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1000px",
    height: "600px",
    border: "2px solid #000",
    borderRadius: "25px",
    position: "relative",
  };

  const gridItemStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
  };

  const rightSideStyle = {
    backgroundColor: "#F9F5EB",
    padding: "16px",
    borderRadius: "25px",
    height: "100%",
  };

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
          <Grid item xs={6} style={rightSideStyle}>
            <div
              style={{
                padding: "16px",
                height: "100%",
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

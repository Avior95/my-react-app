import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Link } from "react-router-dom";

const ProductItem = ({ product, onDelete, onIncrement }) => {
  const [count, setCount] = useState(product.quantity);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  };

  const mediaStyle = {
    height: "250px",
  };

  const contentBelowImageStyle = {
    backgroundColor: "#ffdecb",
    padding: "8px",
    margin: "0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "10px",
  };

  const iconContainerStyle = {
    display: "flex",
    flexDirection: "row", // Horizontal arrangement
    justifyContent: "flex-start", // Align to the left
    alignItems: "center",
  };

  const blackIconStyle = {
    color: "black",
  };

  const handleIncrement = (incrementValue) => {
    setCount((prevCount) => prevCount + incrementValue);
    onIncrement(product.id, incrementValue);
  };

  const circleIconStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#FFBF9B",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease", // Add transition for smooth color change
  };

  const iconHoverStyle = {
    backgroundColor: "#E4DCCF", // Color to change to when hovered
  };

  return (
    <Card className="product" style={cardStyle}>
      <Link to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          alt={product.title}
          src={product.image}
          style={mediaStyle}
        />
      </Link>
      <CardContent style={contentBelowImageStyle}>
        <Typography variant="h6">{product.title}</Typography>
        <Divider />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button style={blackIconStyle} onClick={() => handleIncrement(-1)}>
            <RemoveIcon />
          </Button>
          <div
            style={{
              ...circleIconStyle,
              ...(count > product.quantity ? iconHoverStyle : null), // Apply hover style if count is greater
            }}
          >
            {count}
          </div>
          <Button style={blackIconStyle} onClick={() => handleIncrement(1)}>
            <AddIcon />
          </Button>
        </div>
        <div style={iconContainerStyle}>
          <Button
            onClick={() => {
              window.location.href = `/edit/${product.id}`;
            }}
          >
            <EditIcon style={blackIconStyle} />
          </Button>
          <Button onClick={() => onDelete(product.id)}>
            <DeleteIcon style={blackIconStyle} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;

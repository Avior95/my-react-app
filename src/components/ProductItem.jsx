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

const ProductItem = ({ product, onDelete }) => {
  const [count, setCount] = useState(0);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "30px", // Increased border-radius for rounder corners
    overflow: "hidden", // Hide overflow to prevent content from protruding
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex", // Use flex to arrange the image and content side by side
    flexDirection: "column", // Stack the image and content vertically
  };

  const mediaStyle = {
    height: "250px", // Adjust the height of the media component
  };

  const contentBelowImageStyle = {
    backgroundColor: "#ffdecb",
    padding: "8px",
    margin: "0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "flex-start", // Align icons to the left
    alignItems: "center",
  };

  const blackIconStyle = {
    color: "black", // Set the icon color to black
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
        {/* Content below the image */}
        <Typography variant="h6">{product.title}</Typography>
        <Divider />
        <div style={iconContainerStyle}>
          {/* Counter */}
          <Button style={blackIconStyle} onClick={() => setCount(count - 1)}>
            -1
          </Button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#FFBF9B",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {count}
            </div>
          </div>
          <Button style={blackIconStyle} onClick={() => setCount(count + 1)}>
            +1
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

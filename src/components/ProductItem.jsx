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
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

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
    justifyContent: "space-between", // Equal spacing between icons
    alignItems: "center",
    flexWrap: "wrap", // Allow icons to wrap to the next line if needed
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
    transition: "background-color 0.3s ease",
    margin: "2px", // Add some margin to separate the icons
  };

  const iconHoverStyle = {
    backgroundColor: "#E4DCCF",
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
            marginBottom: "15px",
          }}
        >
          <Button style={blackIconStyle} onClick={() => handleIncrement(-1)}>
            <RemoveIcon />
          </Button>
          <div
            style={{
              ...circleIconStyle,
              ...(count > product.quantity ? iconHoverStyle : null),
            }}
          >
            {count}
          </div>
          <Button style={blackIconStyle} onClick={() => handleIncrement(1)}>
            <AddIcon />
          </Button>
        </div>
        <div style={iconContainerStyle}>
          <div>
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
          {product.rating.rate > 4.5 && (
            <StarIcon style={{ color: "#FFBF9B", marginLeft: 10 }} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;

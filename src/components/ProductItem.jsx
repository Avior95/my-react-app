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
import StarIcon from "@mui/icons-material/Star";

import { Link } from "react-router-dom";

const ProductItem = ({ product, onDelete, onIncrement, onCrudClick }) => {
  const [count, setCount] = useState(product.quantity);

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    marginBottom: "70px",
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
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const blackIconStyle = {
    color: "black",
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
    margin: "2px",
  };

  const iconHoverStyle = {
    backgroundColor: "#E4DCCF",
  };

  const handleIncrement = (incrementValue) => {
    setCount((prevCount) => prevCount + incrementValue);
    onIncrement(product.id, incrementValue);
  };
  const handleCrudClick = () => {
    onCrudClick();
  };

  return (
    <Card className="product" style={cardStyle}>
      <Link to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          alt={product.title}
          src={product.image}
          style={mediaStyle}
          onClick={handleCrudClick}
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
          <Link style={blackIconStyle} to={`/edit/${product.id}`}>
            <EditIcon onClick={handleCrudClick} />
          </Link>
          <Button onClick={() => onDelete(product.id)}>
            <DeleteIcon style={blackIconStyle} />
          </Button>
          <div>
            {product.rating && product.rating.rate > 4.5 && (
              <StarIcon style={{ color: "#FFBF9B", marginLeft: "120px" }} />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;

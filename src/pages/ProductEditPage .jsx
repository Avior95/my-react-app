import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

const ProductEditPage = ({ products, setProducts, onIconClick }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const initialProduct = products.find((p) => p.id === parseInt(productId));

  const [productData, setProductData] = useState({
    title: initialProduct.title || "",
    category: initialProduct.category || "",
    price: initialProduct.price || "",
    image: initialProduct.image || "",
    quantity: initialProduct.quantity || "",
    description: initialProduct.description || "",
  });

  const handleEdit = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === parseInt(productId)) {
        return { ...product, ...productData };
      }
      return product;
    });
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    navigate("/");
  };
  const handleIconClick = () => {
    onIconClick();
  };

  const styles = {
    root: {
      backgroundColor: "#F9F5EB",
      padding: "10px",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    input: {
      background: "white",
    },
    button: {
      textAlign: "left",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.root}>
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
        <Link to="/" style={{ color: "black", marginLeft: "10px" }}>
          <HomeIcon onClick={handleIconClick} />
        </Link>
      </div>
      <div style={styles.container}>
        <Typography variant="h4" align="center">
          Edit Product
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Title"
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Category"
              value={productData.category}
              onChange={(e) =>
                setProductData({ ...productData, category: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Price"
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Image URL"
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Quantity"
              value={productData.quantity}
              onChange={(e) =>
                setProductData({ ...productData, quantity: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Description"
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <div style={styles.button}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#ffdecb",
              color: "black",
              fontWeight: "bold",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.4)",
              cursor: "pointer",
              border: "2px solid black",
              width: "100px",
            }}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductEditPage;

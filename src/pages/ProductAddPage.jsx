import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const ProductAddPage = ({ products, setProducts, onIconClick }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
    quantity: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const productId = products.length + 1;
    const newProductWithId = { id: productId, ...newProduct };
    setProducts([...products, newProductWithId]);
    setNewProduct({
      title: "",
      category: "",
      price: "",
      image: "",
      quantity: "",
      description: "",
    });
    localStorage.setItem(
      "products",
      JSON.stringify([...products, newProductWithId])
    );
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
    backButton: {
      position: "absolute",
      top: "10px",
      left: "10px",
      cursor: "pointer",
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
        <Link to="/" style={{ color: "black", marginLeft: "10px" }}>
          <ArrowBackIcon onClick={handleIconClick} />
        </Link>
      </div>
      <div style={styles.container}>
        <Typography variant="h4" align="center">
          Add New Product
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Image URL"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="Description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <div style={styles.button}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#ffdecb",
              color: "black",
              fontWeight: "bold",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.4)",
              cursor: "pointer",
              border: "2px solid black",
              width: "100px",
            }}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProductAddPage = ({ products, setProducts }) => {
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

    // Add the new product to the list of products
    setProducts([...products, newProductWithId]);

    // Clear the form after submission
    setNewProduct({
      title: "",
      category: "",
      price: "",
      image: "",
      quantity: "",
      description: "",
    });

    // Optionally, you can save the updated product list to local storage
    localStorage.setItem(
      "products",
      JSON.stringify([...products, newProductWithId])
    );
    navigate("/");
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
      <div style={styles.container}>
        <Typography variant="h4" align="center">
          Add New Product
        </Typography>
        <ArrowBackIcon
          style={styles.backButton}
          onClick={() => navigate("/")}
        />
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

          {/* Add similar TextFields for other product properties (category, price, image, quantity, description) */}
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

import React, { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../../api/ProductServices";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Fetch products on initial render
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);  // Set the products state
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  // Handle form submission to create a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdProduct = await createProduct(newProduct);
      setProducts([...products, createdProduct]);  // Add the new product to the list
      setNewProduct({ name: "", price: "", image: "" });  // Reset the form
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  // Handle product update
  const handleUpdate = async (id) => {
    const updatedData = { name: "Updated Name", price: 20, image: "updated_image.jpg" }; // Example updated data
    try {
      const updatedProduct = await updateProduct(id, updatedData);
      setProducts(products.map(product => product._id === id ? updatedProduct : product));
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));  // Remove the deleted product
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleUpdate(product._id)}>Update</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}

      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductList;

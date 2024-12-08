import axios from "axios";

// Define the base URL for your backend
const API_URL = "http://localhost:5001/api/mongo/products";

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // This returns the list of products
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data; // This returns the newly created product
  } catch (error) {
    console.error("Error creating product:", error.message);
    throw error;
  }
};

// Update a product by ID
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data; // This returns the updated product
  } catch (error) {
    console.error("Error updating product:", error.message);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // This returns the success message
  } catch (error) {
    console.error("Error deleting product:", error.message);
    throw error;
  }
};

import React, { useState, useEffect } from "react";
import "./Menu.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch items from the backend API
    fetch("http://localhost:5001/api/mongo/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json(); // Parse the JSON data from the response
      })
      .then((data) => {
        setItems(data); // Set items in the state
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError(err.message); // Handle error
        setLoading(false);
      });
  }, []); // Empty dependency array means the effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div class="menu-container">
      <h1>CAKE SLICES</h1>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <ul>
              <li key={item._id}>
                <img src={item.image} />
                <h3>{item.name}</h3>
                <h4>${item.price.toFixed(2)}</h4>
              </li>
            </ul>
          ))
        ) : (
          <li>No items found</li> // If no items are found, display this message
        )}
      </ul>
    </div>
  );
};

export default App;

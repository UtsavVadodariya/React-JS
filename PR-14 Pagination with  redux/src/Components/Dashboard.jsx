import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory } from "../features/productsSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filteredItems, categories } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      dispatch(fetchProducts()); 
    } else {
      dispatch(filterByCategory(category)); 
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">FakeStore Products</h1>

      <div className="category-buttons">
        <button
          onClick={() => handleCategoryChange("All")}
          className={`category-button ${selectedCategory === "All" ? "selected" : ""}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${selectedCategory === category ? "selected" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredItems.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

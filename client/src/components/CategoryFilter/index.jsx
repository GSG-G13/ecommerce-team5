import { useState, useEffect } from 'react';

/* eslint-disable react/prop-types */
const CategoryFilter = ({ selectedCategory, setProducts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const filterHandeler = (category) => {
    fetch(`/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <div>
      <h3 className="filter-title">Filter by Category:</h3>
      <div className="filterss">
        {categories.map((category) => (
          <div className="filter-box" key={category.id}>
            <input
              type="radio"
              id={category.id}
              name="category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={() => filterHandeler(category.category)}
            />
            <label className="filter-name" htmlFor={category.id}>
              {category.category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

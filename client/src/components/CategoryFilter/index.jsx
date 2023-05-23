/* eslint-disable react/prop-types */
const CategoryFilter = ({ selectedCategory, handleCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
  ];
  return (
    <div>
      <h3 className="filter-title">Filter by Category:</h3>
      {categories.map((category) => (
        <div className="filter-box" key={category.id}>
          <input
            type="radio"
            id={category.id}
            name="category"
            value={category.id}
            checked={selectedCategory === category.id}
            onChange={handleCategoryChange}
          />
          <label className="filter-name" htmlFor={category.id}>
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;

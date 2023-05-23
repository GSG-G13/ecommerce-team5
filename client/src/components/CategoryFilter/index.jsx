/* eslint-disable react/prop-types */
const CategoryFilter = ({ categories, selectedCategory, onChange }) => (
  <div>
    <h3>Filter by Category:</h3>
    {categories.map((category) => (
      <div key={category.id}>
        <input
          type="radio"
          id={category.id}
          name="category"
          value={category.id}
          checked={selectedCategory === category.id}
          onChange={onChange}
        />
        <label htmlFor={category.id}>{category.name}</label>
      </div>
    ))}
  </div>
);

export default CategoryFilter;

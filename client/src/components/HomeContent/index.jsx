/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import CategoryFilter from '../CategoryFilter';

const HomeContent = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // here i will do filters handler that will execute when the user click on the category
  // i will do the filter in the server side

  // useEffect(() => {
  //   document.querySelector('.search-input').addEventListener('keyup', (e) => {
  //     const searchString = e.target.value.toLowerCase();
  //     // eslint-disable-next-line arrow-body-style
  //     const filteredProd = products.filter((product) => {
  //       return (
  //         // eslint-disable-next-line operator-linebreak
  //         product.name.toLowerCase().includes(searchString) ||
  //         product.category.toLowerCase().includes(searchString)
  //       );
  //     });
  //     setFilteredProducts(filteredProd);
  //   });
  // }, []);

  // const handleCategoryChange = async (event) => {
  //   const selectedCategoryId = event.target.value;
  //   setSelectedCategory(selectedCategoryId);

  //   try {
  //     const response = await fetch(`/products?category=${selectedCategoryId}`);
  //     const data = await response.json();
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error('Error fetching filtered products:', error);
  //   }
  // };
  const navigateLink = useNavigate();
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <div
        className="products-filters"
        id="products-filters"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          minHeight: '50vh',
          marginTop: '20px',
        }}
      >
        <div className="filters" style={{ flex: 0.5 }}>
          <h3>Filters</h3>
          <CategoryFilter
            categories={categories}
            setProducts={setProducts}
            // selectedCategory={selectedCategory}
            // handleCategoryChange={handleCategoryChange}
          />
        </div>
        <hr />
        <div className="products" style={{ flex: 3, paddingLeft: '10px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Products"
            style={{
              width: '120px',
              height: '15px',
              borderRadius: '25px',
              marginLeft: '75px',
              border: 'none',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f1f1f1',
            }}
          />
          <div className="products-container">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;

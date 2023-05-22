const HomeContent = () => (
  <div
    className="products-filters"
    style={{ display: 'flex', justifyContent: 'flex-start', minHeight: '50vh' }}
  >
    <div className="filters" style={{ flex: 0.5 }}>
      <h3>filters</h3>
    </div>
    <hr />
    <div className="products" style={{ flex: 3, paddingLeft: '10px' }}>
      <h3>Products</h3>
    </div>
  </div>
);

export default HomeContent;

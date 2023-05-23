import Product from './Product';

const HomeContent = () => (
  <>
    <div className="Header">
      <div className="Header__container">
        <div className="Header__container__left">
          <h1 className="Header__container__left__title">Nike</h1>
          <p className="Header__container__left__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            exercitationem voluptatibus quae quidem dolorum. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos
            exercitationem voluptatibus quae quidem dolorum.
          </p>
          <button className="Header__container__left__button" type="button">
            Shop Now
          </button>
        </div>
        <div className="Header__container__right">
          <img
            src="https://png2.cleanpng.com/sh/d6399bf6ecde1fdf7d4494bbcf2a5e3a/L0KzQYm3UcI3N516iZH0aYP2gLBuTgNpd5Yyi9DuYXvogsS0gBF0fZJxRdpyZ3iweLbsjPVlNZd0hAZCZXH1PbTokCVidF5oeeVAYXywg7n2hgMuPZI7etMAMEfnRIG8VcgvOGk6SqM6NEi0RYKAUMA1OGQAUKgDND7zfri=/kisspng-shoe-sneakers-casual-high-heeled-footwear-casual-casual-shoes-5a6ba507d40558.0852114815170040398684.png"
            alt="Product"
            className="Header__container__right__image"
          />
        </div>
      </div>
    </div>
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
        <h3>filters</h3>
      </div>
      <hr />
      <div className="products" style={{ flex: 3, paddingLeft: '10px' }}>
        <input
          type="text"
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
          {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
            <Product />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default HomeContent;

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigateLink = useNavigate();

  return (
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
          <button
            className="Header__container__left__button"
            type="button"
            onClick={() => navigateLink('/login')}
          >
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
  );
};

export default Header;

import Footer from '../Footer';
import Navbar from '../Navbar';
import CartItems from './CartItems';
import Summary from './Summary';

const Cart = () => (
  <>
    <Navbar />
    <div className="cart">
      <CartItems />
      <Summary />
    </div>
    <Footer />
  </>
);

export default Cart;

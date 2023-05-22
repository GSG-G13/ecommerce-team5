import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';

const HomePage = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default HomePage;

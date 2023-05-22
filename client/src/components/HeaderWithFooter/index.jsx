import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';

const NavbarWithFooter = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default NavbarWithFooter;

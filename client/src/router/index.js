import { createBrowserRouter } from 'react-router-dom';

import Singup from '../components/singuppage/index';
import Login from '../components/loginpage';
import HomePage from '../components/HomePage';
import HomeContent from '../components/HomeContent';
import ProductPage from '../components/ProductPage';
import Cart from '../components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <HomeContent />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/signup',
    element: <Singup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <h2>Error</h2>,
  },
]);

export default router;

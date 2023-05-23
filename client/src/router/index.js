import { createBrowserRouter } from 'react-router-dom';

import Singup from '../components/singuppage/index';
import HomePage from '../components/HomePage';
import HomeContent from '../components/HomeContent';
import ProductPage from '../components/ProductPage';

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
        path: '/product',
        element: <ProductPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <Singup />,
  },
  {
    path: '/*',
    element: <h2>Error</h2>,
  },
]);

export default router;

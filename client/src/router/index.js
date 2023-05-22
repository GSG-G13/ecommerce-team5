import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../components/HomePage';
import HomeContent from '../components/HomeContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <HomeContent />,
      },
    ],
  },
]);

export default router;

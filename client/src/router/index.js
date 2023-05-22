import {
  createBrowserRouter,
} from 'react-router-dom';

import NavbarWithFooter from '../components/HeaderWithFooter';
import Singup from '../components/singuppage/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Singup />,
  },
  {
    path: '/signup',
    element: <Singup />
  }, 
  {
    path: '/*',
    element: <h2>Error</h2>,
  },
]);

export default router;

import {
  createBrowserRouter,
} from 'react-router-dom';

import NavbarWithFooter from '../components/HeaderWithFooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWithFooter />,
  },
  {
    path: '/*',
    element: <h2>Error</h2>,
  },
]);

export default router;

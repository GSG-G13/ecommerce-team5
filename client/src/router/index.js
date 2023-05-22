import {
  createBrowserRouter,
} from 'react-router-dom';

import NavbarWithFooter from '../components/HeaderWithFooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWithFooter />,
  },
]);

export default router;
